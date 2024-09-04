import NextAuth, { type NextAuthConfig, DefaultSession } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
// noinspection ES6UnusedImports
import { JWT } from 'next-auth/jwt';

import axios, { isAxiosError } from 'axios';

import { IUser, LoginResponse, RefreshResponse } from '@/interfaces';

interface AccessTokenPayload {
  exp: number;
  iat: number;
  sub: number;
}

declare module 'next-auth/jwt' {
  interface JWT {
    user: IUser;
    accessToken: string;
    refreshToken: string;
  }
}
declare module 'next-auth' {
  interface User {
    user: IUser;
    accessToken: string;
    refreshToken: string;
  }

  interface Session {
    user: IUser & DefaultSession['user'];
    accessToken: string;
    refreshToken: string;
  }
}

async function refreshAccessToken(refreshToken: string): Promise<{
  ok: boolean;
  token: string;
  error: string;
}> {
  try {
    const response = await axios.post<RefreshResponse>(
      process.env.API_URL + '/auth/refresh',
      {
        refreshToken,
      }
    );

    return {
      ok: true,
      token: response.data.accessToken,
      error: '',
    };
  } catch (e) {
    if (isAxiosError(e)) {
      if (e?.response?.data) {
        return {
          ok: false,
          error: 'RefreshTokenError',
          token: '',
        };
      }
    }
  }

  return {
    ok: false,
    error: 'An error occurred',
    token: '',
  };
}

export const authConfig: NextAuthConfig = {
  debug: process.env.NODE_ENV === 'development',
  pages: {
    signIn: '/auth/login',
  },
  secret: process.env.AUTH_SECRET,
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { type: 'text' },
        password: { type: 'password' },
      },
      async authorize(credentials): Promise<LoginResponse> {
        try {
          const response = await axios.post<LoginResponse>(
            process.env.API_URL + '/auth/login',
            {},
            {
              auth: {
                username: credentials.email as string,
                password: credentials.password as string,
              },
            }
          );

          return response.data;
        } catch (e: any) {
          if (isAxiosError(e)) {
            if (e?.response?.data) {
              throw e.response.data.message;
            }
          }

          throw 'An error occurred';
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (token.accessToken) {
        const decodedAccessToken: AccessTokenPayload = JSON.parse(
          Buffer.from(token.accessToken.split('.')[1], 'base64').toString()
        );
        const now = Math.floor(Date.now() / 1000);

        if (now > decodedAccessToken.exp) {
          const tokenResponse = await refreshAccessToken(token.refreshToken);

          if (tokenResponse.ok) {
            token.accessToken = tokenResponse.token;
            return token;
          } else {
            token.error = tokenResponse.error;
            return token;
          }
        }
      }

      // Check for logged user from authorize and add fields to the token
      if (user) {
        const { user: authUser, accessToken, refreshToken } = user;

        token.id = authUser.id;
        token.firstName = authUser.firstName;
        token.lastName = authUser.lastName;
        token.email = authUser.email;
        token.role = authUser.role;
        token.accessToken = accessToken;
        token.refreshToken = refreshToken;
      }

      return token;
    },

    session({ session, token }) {
      const { accessToken, refreshToken, ...rest } = token;

      return {
        ...session,
        user: {
          ...session.user,
          ...rest,
        },
        accessToken,
        refreshToken,
        error: token.error,
      };
    },
  },
};

export const { signIn, auth, handlers } = NextAuth(authConfig);

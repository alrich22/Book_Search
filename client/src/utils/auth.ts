import { jwtDecode } from "jwt-decode";

interface UserToken {
  name?: string;
  exp: number;
}

class AuthService {

  loggedIn(): boolean {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token: string): boolean {
    try {
      const decoded = jwtDecode<UserToken>(token);
      return decoded.exp < Date.now() / 1000;
    } catch (err) {
      return true;
    }
  }

  getToken(): string | null {
    return localStorage.getItem("id_token");
  }

  login(idToken: string): void {
    localStorage.setItem("id_token", idToken);
    window.location.assign("/");
  }

  logout(): void {
    localStorage.removeItem("id_token");
    window.location.assign("/");
  }
}

export default new AuthService();
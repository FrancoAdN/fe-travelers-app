import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';

export function decodeCookie<T>(name: string): T | undefined {
  const cookieValue = Cookies.get(name);
  if (cookieValue) return jwtDecode(cookieValue);
}

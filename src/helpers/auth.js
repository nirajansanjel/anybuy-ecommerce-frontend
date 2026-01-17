function allowedAdminRoles(userRoles) {
  const adminRoles = ["ADMIN", "MERCHANT"];
  return userRoles?.some((role) => adminRoles.includes(role));
}
export default allowedAdminRoles;

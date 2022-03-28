export function getEmployeeCode(employee, country) {
  const regions = ['Asia', 'Europe'];

  if (regions.includes(country.region)) {
    return {
      identifier: `${employee.firstName}${employee.lastName}${employee.dateOfBirth.replace(/\//g, '')}`
    };
  }

  return {};
}
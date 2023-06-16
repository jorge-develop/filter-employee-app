export function filterEmployees(employees, searchTerm) {
  return employees?.filter(employee => {
    const fullName = `${employee?.firstName} ${employee?.lastName}`;
    return fullName.toLowerCase().includes(searchTerm.toLowerCase());
  });
}

export function filteredByGender(data, gender) {
  return data.filter(obj => obj.gender === gender);
}

export function formatDate(inputDate) {
  const dateParts = inputDate.split("-");
  const year = dateParts[0];
  const month = dateParts[1];
  const day = dateParts[2];
  const formattedDate = `${month} / ${day} / ${year}`;
  return formattedDate;
}

import * as XLSX from 'xlsx';

export const exportFleetToExcel = (vehicles: any[]) => {
  const wb = XLSX.utils.book_new();
  
  const fleetData = vehicles.map(v => ({
    'Registration Number': v.reg,
    'Model': v.model,
    'Type': v.type,
    'Status': v.status,
    'Mileage': v.mileage,
    'MOT Expiry': v.motExpiry,
    'Insurance': v.insurance,
    'Road Tax': v.roadTax,
    'Last Service': v.lastService,
    'Rental Company': v.rental,
    'Notes': v.notes,
  }));
  
  const ws = XLSX.utils.json_to_sheet(fleetData);
  
  const colWidths = [
    { wch: 18 },
    { wch: 20 },
    { wch: 15 },
    { wch: 12 },
    { wch: 10 },
    { wch: 12 },
    { wch: 12 },
    { wch: 12 },
    { wch: 12 },
    { wch: 15 },
    { wch: 30 },
  ];
  ws['!cols'] = colWidths;
  
  XLSX.utils.book_append_sheet(wb, ws, 'Fleet');
  
  XLSX.writeFile(wb, `Fleet_Export_${new Date().toISOString().split('T')[0]}.xlsx`);
};

export const exportEmployeesToExcel = (employees: any[]) => {
  const wb = XLSX.utils.book_new();
  
  const employeeData = employees.map(e => ({
    'Name': e.name,
    'Status': e.status,
    'Company': e.company,
    'Phone Number': e.phone,
    'Email': e.email,
    'Home Address': e.address,
    'Driver Licence': e.driverLicence,
    'DBS Check': e.dbsCheck,
    'Bank Name': e.bankName,
    'Account Number': e.accountNumber,
    'Sort Code': e.sortCode,
    'Rating': e.rating,
  }));
  
  const ws = XLSX.utils.json_to_sheet(employeeData);
  
  const colWidths = [
    { wch: 20 },
    { wch: 12 },
    { wch: 15 },
    { wch: 18 },
    { wch: 25 },
    { wch: 35 },
    { wch: 15 },
    { wch: 12 },
    { wch: 15 },
    { wch: 15 },
    { wch: 12 },
    { wch: 8 },
  ];
  ws['!cols'] = colWidths;
  
  XLSX.utils.book_append_sheet(wb, ws, 'Employees');
  
  XLSX.writeFile(wb, `Employees_Export_${new Date().toISOString().split('T')[0]}.xlsx`);
};

export const exportFinanceToExcel = (salaries: any[], expenses: any[], transactions: any[]) => {
  const wb = XLSX.utils.book_new();
  
  const salaryData = salaries.map(s => ({
    'Employee': s.name,
    'Position': s.position,
    'Base Salary': s.salary,
    'Bonus': s.bonus,
    'Total': s.total,
    'Status': s.status,
  }));
  
  const wsSalaries = XLSX.utils.json_to_sheet(salaryData);
  wsSalaries['!cols'] = [
    { wch: 20 },
    { wch: 20 },
    { wch: 12 },
    { wch: 10 },
    { wch: 12 },
    { wch: 12 },
  ];
  XLSX.utils.book_append_sheet(wb, wsSalaries, 'Salaries');
  
  const expenseData = expenses.map(e => ({
    'Category': e.category,
    'Amount': e.amount,
    'Percentage': e.percentage + '%',
  }));
  
  const wsExpenses = XLSX.utils.json_to_sheet(expenseData);
  wsExpenses['!cols'] = [
    { wch: 20 },
    { wch: 12 },
    { wch: 12 },
  ];
  XLSX.utils.book_append_sheet(wb, wsExpenses, 'Expenses');
  
  const transactionData = transactions.map(t => ({
    'Date': t.date,
    'Description': t.description,
    'Category': t.category,
    'Van': t.van,
    'Amount': t.amount,
  }));
  
  const wsTransactions = XLSX.utils.json_to_sheet(transactionData);
  wsTransactions['!cols'] = [
    { wch: 12 },
    { wch: 30 },
    { wch: 15 },
    { wch: 12 },
    { wch: 12 },
  ];
  XLSX.utils.book_append_sheet(wb, wsTransactions, 'Transactions');
  
  XLSX.writeFile(wb, `Finance_Export_${new Date().toISOString().split('T')[0]}.xlsx`);
};

export const exportCompleteReportToExcel = (vehicles: any[], employees: any[], salaries: any[], expenses: any[], transactions: any[]) => {
  const wb = XLSX.utils.book_new();
  
  const fleetData = vehicles.map(v => ({
    'Registration Number': v.reg,
    'Model': v.model,
    'Type': v.type,
    'Status': v.status,
    'Mileage': v.mileage,
    'MOT Expiry': v.motExpiry,
    'Insurance': v.insurance,
    'Road Tax': v.roadTax,
    'Last Service': v.lastService,
    'Rental Company': v.rental,
    'Notes': v.notes,
  }));
  
  const wsFleet = XLSX.utils.json_to_sheet(fleetData);
  wsFleet['!cols'] = [{ wch: 18 }, { wch: 20 }, { wch: 15 }, { wch: 12 }, { wch: 10 }, { wch: 12 }, { wch: 12 }, { wch: 12 }, { wch: 12 }, { wch: 15 }, { wch: 30 }];
  XLSX.utils.book_append_sheet(wb, wsFleet, 'Fleet');
  
  const employeeData = employees.map(e => ({
    'Name': e.name,
    'Status': e.status,
    'Company': e.company,
    'Phone Number': e.phone,
    'Email': e.email,
    'Home Address': e.address,
    'Driver Licence': e.driverLicence,
    'DBS Check': e.dbsCheck,
    'Bank Name': e.bankName,
    'Account Number': e.accountNumber,
    'Sort Code': e.sortCode,
    'Rating': e.rating,
  }));
  
  const wsEmployees = XLSX.utils.json_to_sheet(employeeData);
  wsEmployees['!cols'] = [{ wch: 20 }, { wch: 12 }, { wch: 15 }, { wch: 18 }, { wch: 25 }, { wch: 35 }, { wch: 15 }, { wch: 12 }, { wch: 15 }, { wch: 15 }, { wch: 12 }, { wch: 8 }];
  XLSX.utils.book_append_sheet(wb, wsEmployees, 'Employees');
  
  const salaryData = salaries.map(s => ({
    'Employee': s.name,
    'Position': s.position,
    'Base Salary': s.salary,
    'Bonus': s.bonus,
    'Total': s.total,
    'Status': s.status,
  }));
  
  const wsSalaries = XLSX.utils.json_to_sheet(salaryData);
  wsSalaries['!cols'] = [{ wch: 20 }, { wch: 20 }, { wch: 12 }, { wch: 10 }, { wch: 12 }, { wch: 12 }];
  XLSX.utils.book_append_sheet(wb, wsSalaries, 'Salaries');
  
  const expenseData = expenses.map(e => ({
    'Category': e.category,
    'Amount': e.amount,
    'Percentage': e.percentage + '%',
  }));
  
  const wsExpenses = XLSX.utils.json_to_sheet(expenseData);
  wsExpenses['!cols'] = [{ wch: 20 }, { wch: 12 }, { wch: 12 }];
  XLSX.utils.book_append_sheet(wb, wsExpenses, 'Expenses');
  
  const transactionData = transactions.map(t => ({
    'Date': t.date,
    'Description': t.description,
    'Category': t.category,
    'Van': t.van,
    'Amount': t.amount,
  }));
  
  const wsTransactions = XLSX.utils.json_to_sheet(transactionData);
  wsTransactions['!cols'] = [{ wch: 12 }, { wch: 30 }, { wch: 15 }, { wch: 12 }, { wch: 12 }];
  XLSX.utils.book_append_sheet(wb, wsTransactions, 'Transactions');
  
  XLSX.writeFile(wb, `LogisticPro_Complete_Report_${new Date().toISOString().split('T')[0]}.xlsx`);
};

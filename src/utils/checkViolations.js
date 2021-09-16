export const checkViolations = (worklog, id) => {
    const employeeWorklog = worklog.filter(
        (item) => item.employee_id === Number(id)
    );
    const filterWorklog = worklog.filter(
        (item) => item.employee_id !== Number(id)
    );
    const result = [];

    for (let i = 0; i < employeeWorklog.length; i++) {
        let counter = 0;
        for (let j = 0; j < filterWorklog.length; j++) {
            if (employeeWorklog[i].from > filterWorklog[j].from && employeeWorklog[i].from < filterWorklog[j].to) {
                counter++;
            }
        }
        if (counter > 3) {
            result.push(employeeWorklog[i].id);
        }
    }
    return result;
}
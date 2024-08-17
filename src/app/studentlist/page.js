import Link from "next/link";

export default function StudentList() {
  const student = ["anil", "peter", "shark", "sam"];
  return (
    <div>
      <h1>Student List</h1>
      {student.map((stud) => (
        <ul>
          <li>
            <Link href={`/studentlist/${stud}`}>{stud}</Link>
          </li>
        </ul>
      ))}
    </div>
  );
}

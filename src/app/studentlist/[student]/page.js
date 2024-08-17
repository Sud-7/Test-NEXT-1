"use client";

export default function StudentList({ params }) {
  return (
    <div>
      <h1>Student List</h1>
      {params.student}
    </div>
  );
}

import React from "react";

interface CourseProps {
  title: string;
  description: string;
  level: "Podstawowy" | "Średniozaawansowany" | "Zaawansowany";
  price: string;
}

const Course = (props: CourseProps) => {
  return (
    <>
      <div className="course">
        <p className="course-title">{props.title}</p>
        <p className="course-description">{props.description}</p>
        <p className="course-level">
          Poziom trudności:{" "}
          <span className="course-level-bold">{props.level}</span>
        </p>
        <button className="course-buy">{props.price} PLN</button>
      </div>
    </>
  );
};

export default Course;

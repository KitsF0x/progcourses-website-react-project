import React from "react";

interface CourseProps {
  title: string;
  titleHighlighted: string;
  description: string;
  level: "Podstawowy" | "Średniozaawansowany" | "Zaawansowany";
  price: string;
}

const Course = (props: CourseProps) => {
  const parts = props.title.split(props.titleHighlighted);
  return (
    <>
      <div className="course">
        <p className="course-title">
          {parts.map((part, index) => (
            <span key={index}>
              {index > 0 && (
                <span className="highlighted">{props.titleHighlighted}</span>
              )}
              {part}
            </span>
          ))}
        </p>
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

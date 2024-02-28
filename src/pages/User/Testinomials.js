import React from "react";

const Testimonials = () => {
  return (
    <div className="mt-2">
      <div className="rounded-lg bg-base-300 m-4 p-2 text-center font-semibold">
        <h1 className="text-3xl p-4 pb-6">TESTIMONIALS</h1>
        <h1 className="text-xl pb-4">LET THEM SPEAK FOR US!</h1>
        <div className="flex justify-between p-5">
          <div className="card w-96 bg-primary text-primary-content">
            <div className="card-body">
              <p className="text-justify">
                It is really important to know about modern technologies and
                activities moduling each and everyday. It was really good to see
                that the students and staff of ACM student chapter taking the
                responsibility by creating a place where we can learn , teach
                each other and share the knowledge both at the Academic level
                and in competitive fields.
              </p>
              <p className="text-xl">Dr. C. D. Naidu</p>
            </div>
          </div>
          <div className="card w-96 bg-primary text-primary-content">
            <div className="card-body">
              <p className="text-justify">
                Team ACM is targeted to bring out the hidden talents and
                introducing how the real world of a Engineer works.It always
                works on improving the soft skills and making students
                experienced in the engineering sector.Events which was conducted
                by ACM are making students to develop their teamwork and
                individual skills It was pleasure to watch Team ACM how they
                Moulding the careers of upcoming students.
              </p>
              <p className="text-xl mt-3">Dr. D. Srinivasa Rao</p>
            </div>
          </div>
          <div className="card w-96 bg-primary text-primary-content">
            <div className="card-body">
              <p className="text-justify">
                ACM, the student chapter from IT department, it was created to
                help and encourage the students to learn something new. To let
                the students know how the actual corporate world works outside.
                The Volunteers of ACM always strived to keep this student
                chapter in the first row having the only motto of providing a
                platform to know about the technical knowledge and support each
                other.
              </p>
              <p className="text-xl mt-2">S. Murali Mohan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

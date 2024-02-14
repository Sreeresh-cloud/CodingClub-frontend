import Asher from "../assets/images/img1.jpg";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const branches = [
  { slug: "B.Arch", label: "Architecture" },
  { slug: "CH", label: "Chemical Engineering" },
  { slug: "CE", label: "Civil Engineering" },
  { slug: "CSE", label: "Computer Science & Engineering" },
  { slug: "EC", label: "Electronics and Communication Engineering" },
  { slug: "EEE", label: "Electrical & Electronics Engineering" },
  { slug: "MCA", label: "Masters of Computer Application " },
  { slug: "MECH", label: "Mechanical Engineering" },
  { slug: "ER", label: "Electrical & Computer Science Engineering" }
]

const EditProfile = () => {

  const { userState, tokenState } = useContext(UserContext);
  const [userDetails, setUserDetails] = userState;
  const [token, setToken] = tokenState;
  console.log(userDetails);
  const handleSubmit = async (values) => {};

  return (
    <div className="flex-auto p-7 mb-7 sm:mb-20 sm:px-14">
      <div className="flex sm:mt-7 mb-24">
        <div className="font-black text-4xl sm:text-6xl">PROFILE</div>
        <div className="flex-auto border-b-4 mb-2 ml-2"></div>
      </div>
      <div className="border-2 border-[#E5245A] rounded-[20px] p-4 my-4 mx-4 h-auto w-auto">
          <div className="flex items-center justify-center">
          <div className="font-montserrat font-bold text-1xl p-4">Edit profile</div>
          </div>
          <div className="flex lg:flex-row flex-col">
          <div className="lg:w-1/4 w-full flex justify-center">
          <div className="relative h-48 w-auto p-3">
            <img
              className="w-auto h-full"
              src={Asher}
              alt="Profile"
            />
          </div>
          </div>
            {/* <div className="lg:w-3/4 w-full lg:flex-shrink-0 lg:pl-4">
              <div className="mb-4">
                <label
                  className="block text-lg font-bold text-gray-600"
                  htmlFor="name"
                >
                  Name:
                </label>
                <input
                  className="w-full bg-gray-800 border border-gray-300 rounded-md p-2"
                  type="text"
                  id="name"
                  placeholder="John Doe"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-lg font-bold text-gray-600"
                  htmlFor="email"
                >
                  Email:
                </label>
                <input
                  className="w-full bg-gray-800 border border-gray-300 rounded-md p-2"
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-lg font-bold text-gray-600"
                  htmlFor="number"
                >
                  Contact No.
                </label>
                <input
                  className="w-full bg-gray-800 border border-gray-300 rounded-md p-2"
                  type="text"
                  id="number"
                  placeholder="+919778653198"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-lg font-bold text-gray-600"
                  htmlFor="address"
                >
                  Address
                </label>
                <input
                  className="w-full bg-gray-800 border border-gray-300 rounded-md p-2"
                  type="text"
                  id="address"
                  placeholder="karicode kollam"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-lg font-bold text-gray-600"
                  htmlFor="study"
                >
                  Year of Study
                </label>
                <input
                  className="w-full bg-gray-800 border border-gray-300 rounded-md p-2"
                  type="year"
                  id="study"
                  placeholder="2025"
                />
              </div>
              <div className="flex justify-end mt-6 mb-4">
              <button className="bg-black border-2 border-[#E5245A] text-white px-4 py-2 rounded-lg mr-4">Save</button>
              <button className="bg-black border-2 border-[#E5245A] text-white px-4 py-2 rounded-lg "><Link to='/profile' onClick={()=> setVisible(false)}>Cancel</Link></button>
              </div>
            </div> */}
            <Formik initialValues={{
              admission_no: userDetails?.admission_no !== null ? userDetails?.admission_no : "",
              name: userDetails?.name !== null ? userDetails?.name : "",
              branch: userDetails?.branch !== null ? userDetails?.branch : "",
              phone_number: userDetails?.phone_number !==null ? userDetails?.phone_number : "",
              college: userDetails?.college !== null ? userDetails?.college : "",
              course_duration_from: userDetails?.course_duration_from !== null ? userDetails?.course_duration_from : "",
              course_duration_to: userDetails?.course_duration_to !== null ? userDetails?.course_duration_to : ""
            }}
              onSubmit={handleSubmit}
              enableReinitialize={true}
              className="lg:w-3/4 w-full lg:flex-shrink-0 lg:pl-4"
            >
              {(formProps) => (
                <Form>
                  <div className="mb-4">
                    <h3
                      className="block text-lg font-bold text-gray-600"
                    >
                      Admission Number:
                    </h3>
                    <Field
                      className="w-full bg-gray-800 border border-gray-300 rounded-md p-2"
                      required={true}
                      id="admission_no"
                      name="admission_no"
                      placeholder=""
                      type={"number"}
                    />
                  </div>
                  <div className="mb-4">
                    <h3
                      className="block text-lg font-bold text-gray-600"
                    >
                      Name:
                    </h3>
                    <Field
                      className="w-full bg-gray-800 border border-gray-300 rounded-md p-2"
                      required={true}
                      id="name"
                      name="name"
                      placeholder="Name"
                      type={"text"}
                    />
                  </div>
                  <div className="flex justify-end mt-6 mb-4">
                    <button type="submit" className="bg-black border-2 border-[#E5245A] text-white px-4 py-2 rounded-lg mr-4">Save</button>
                    <Link to="/profile"><button className="bg-black border-2 border-[#E5245A] text-white px-4 py-2 rounded-lg ">Cancel</button></Link>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
      </div>
    </div>
  );
};

export default EditProfile;
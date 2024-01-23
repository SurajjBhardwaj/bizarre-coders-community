import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const LearnDSA = () => {
  return (
    <>
      <Navbar />
      <div className="mt-10">
        <h1 className="text-white text-4xl font-bold text-center w-full ">
          Data Structures & Algorithms
        </h1>
        <div className="m-3">
          <h3 className="text-gray-300 text-xl ml-4 font-semibold underline text-light w-full ">
            Why to learn it ?
          </h3>
          <p className="text-gray-300 m-10 break-all">
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
            cum enim placeat eius molestias aliquam dolor dolorum nam, minima,
            adipisci aut. Aliquid placeat illum temporibus cupiditate
            reprehenderit, eveniet nulla repudiandae? Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Recusandae vero optio enim cum
            adipisci aut laboriosam voluptas ea harum minus, tempore totam sequi
            nobis aperiam facere placeat! Officiis corporis, veniam laboriosam
            quisquam ullam commodi libero culpa. Reiciendis obcaecati
          </p>
          <h3 className="text-gray-300 text-xl ml-4 font-semibold underline text-light w-full ">
            How to start ?
          </h3>
          <div className="steps m-10 text-gray-300">
            <p className="btn text-white font-bold max-w-44 py-1">
              Bachpan k doubts
            </p>
            <h2 className="mt-2 ml-10  text-xl font-bold">C or C++</h2>
            <p className="mt-2 ml-10 text-lg break-all">
              In long term you have to learn C++ because C is not an Object
              Oriented Language, so it misses out on many things! So better go
              with C++ from start!
            </p>
            <h2 className="mt-2 ml-10  text-xl font-bold">
              C++ or Java or Python
            </h2>
            <p className="mt-2 ml-10 text-lg break-all">
              Anyone from above three which suits you best , all of them are
              absolute best!
            </p>
          </div>
          {/* Steps */}
          <div className="steps m-10 text-gray-300">
            <p className="btn my-2 text-white font-bold w-24">Step-1</p>
            <h2 className=" ml-10  text-lg">
              Learn a language and practice its coding questions from{" "}
              <Link to="https://www.hackerrank.com/">
                <b className="underline cursor-pointer">HackerRank</b>
              </Link>{" "}
            </h2>
            <h2 className=" ml-10  text-lg">
              Make sure you solve to get minimum 3⭐ there!
            </h2>
          </div>
          <div className="steps m-10 text-gray-300">
            <p className="btn my-2 text-white font-bold w-24">Step-2</p>
            <h2 className=" ml-10  text-lg">
              Start learning DSA from Anyone of the listed youtube playlist
            </h2>
            <h2 className=" ml-10  text-lg">
              <ul className="ml-2 mt-4">
                <Link
                  target="_saka"
                  to="https://www.youtube.com/playlist?list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz"
                >
                  <li className="hover:underline cursor-pointer hover:text-white font-bold text-gray-400 max-w-88">
                    Striver's Complete DSA Course
                    <small className="text-red-300"> Recommeded</small>
                  </li>
                </Link>
                <Link
                  target="_saka"
                  to="https://www.youtube.com/watch?v=WQoB2z67hvY&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA"
                >
                  <li className="hover:underline cursor-pointer hover:text-white font-bold text-gray-400 max-w-80">
                    Love Babbar's DSA Course
                  </li>
                </Link>
                <Link
                  target="_saka"
                  to="https://www.youtube.com/playlist?list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ"
                >
                  <li className="hover:underline cursor-pointer hover:text-white font-bold text-gray-400 max-w-80">
                    Apna College's DSA Course
                  </li>
                </Link>
                <Link
                  target="_saka"
                  to="https://www.youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O"
                >
                  <li className="hover:underline cursor-pointer hover:text-white font-bold text-gray-200 ">
                    Abdul Baari Algorithms Playlist{" "}
                    <small className="text-red-300">
                      Do this in addition to any of the above
                    </small>
                  </li>
                </Link>
              </ul>
            </h2>
          </div>
          <div className="steps m-10 text-gray-300">
            <p className="btn my-2 text-white font-bold w-24">Step-3</p>
            <h2 className=" ml-10  text-lg">
              Now comes the most important part i.e. <b>problem solving</b>...
            </h2>
            <ul className="ml-12 mt-4">
              <Link
                target="_saka"
                to="https://leetcode.com/problemset/algorithms/"
              >
                <li className="hover:underline cursor-pointer hover:text-white font-bold text-gray-400 max-w-24">
                  Leetcode{" "}
                </li>
              </Link>
              <Link
                target="_saka"
                to="https://www.geeksforgeeks.org/explore?page=1&sortBy=submissions"
              >
                <li className="hover:underline cursor-pointer hover:text-white font-bold text-gray-400 max-w-24">
                  GeeksforGeeks
                </li>
              </Link>
            </ul>
          </div>
          <div className="steps m-10 text-gray-300">
            <p className="btn my-2 text-white font-bold max-w-80  p-2">
              How to develop problem solving skill!
            </p>
            <h2 className=" ml-10  text-lg">
              That is the most important and most asked question , so for that
              should start solving <b>Codeforces's 800-900 rated questions</b>{" "}
              ,that will help you build your intuitions.{" "}
              <small className="text-red-300">(Recommeded)</small>
            </h2>
            <h2 className=" ml-10  text-lg">
              Alternative to that you can also solve easy first questions on{" "}
              <b>Leetcode</b>, then onto medium ones
            </h2>
          </div>
          <div className="steps m-10 text-gray-300">
            <p className="btn my-2 text-white font-bold max-w-80  p-2">
              Should I start giving contests ?
            </p>
            <h2 className=" ml-10  text-lg">
              Yes, absolutely Once you finshed with{" "}
              <b className="btn px-1">Step-1</b> & had learnt about Arrays and
              some algorithms,you can participate as first 2-3 questions only
              needs problem solving skills not that much DSA knowledge
              <small className="text-red-300">
                {" "}
                (Any platform as per choice)
              </small>
            </h2>
          </div>
        </div>
      </div>
      <Footer className="end-0" />
    </>
  );
};

export default LearnDSA;

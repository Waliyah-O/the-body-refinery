
export const ClassAndTrainersNav = ({ children }) => {
    return (
      <>
        {/* Navigation Bar */}
        <nav className="bg-blue-500 text-white py-4">
          <div className="container mx-auto flex justify-between items-center px-4">
            <h1 className="text-2xl font-bold">Body Refinery Gym</h1>
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/classes-schedule" className="hover:underline">
                  Classes & Schedule
                </Link>
              </li>
              <li>
                <Link to="/trainer-profile" className="hover:underline">
                  Trainer Profiles
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="">{children}</div>
      </>
    );
  };
  
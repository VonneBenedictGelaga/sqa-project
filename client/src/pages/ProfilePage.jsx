import Navbar from "../components/Navbar";
import { useUserContext } from "../UserContext";

function ProfilePage() {
  const { username } = useUserContext();
  const random = Math.floor(Math.random() * 3) + 1;

  const returnToDashboard = () => {
    window.location.href = '/';
  };

  return (
    <>
      <Navbar />

      <main className="bg-base-300 max-w-lg mx-auto shadow-lg rounded-lg mt-16">
        <div className="flex flex-col items-center py-8 gap-8">
          <div className="avatar online">
            <div className="w-40 rounded-full">
              <img src={`/images/${random}.jpg`} />
            </div>
          </div>

          <h1 className="text-2xl">{username}</h1>

          <button className="btn btn-primary text-white mt-5 items-center" onClick={returnToDashboard}>
            <svg 
              viewBox="0 0 56 56" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="white"
              stroke="currentColor"
              className="w-5 h-5 opacity-70"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M 19.2811 49.5156 C 20.5233 49.5156 21.3436 48.6719 21.3436 47.4531 C 21.3436 46.8438 21.1561 46.3984 20.7811 46.0234 L 14.0311 39.4375 L 9.5780 35.6406 L 15.0858 35.8750 L 44.9920 35.8750 C 50.4529 35.8750 52.7267 33.3672 52.7267 28.0703 L 52.7267 14.2188 C 52.7267 8.7578 50.4529 6.4844 44.9920 6.4844 L 31.8671 6.4844 C 30.5780 6.4844 29.7342 7.4219 29.7342 8.5703 C 29.7342 9.7188 30.5780 10.6562 31.8671 10.6562 L 44.9920 10.6562 C 47.4764 10.6562 48.5545 11.7344 48.5545 14.2188 L 48.5545 28.0703 C 48.5545 30.6250 47.4764 31.7031 44.9920 31.7031 L 15.0858 31.7031 L 9.5780 31.9375 L 14.0311 28.1406 L 20.7811 21.5547 C 21.1561 21.1797 21.3436 20.7109 21.3436 20.1016 C 21.3436 18.9062 20.5233 18.0391 19.2811 18.0391 C 18.7655 18.0391 18.1561 18.2969 17.7577 18.6953 L 3.9764 32.2188 C 3.5077 32.6640 3.2733 33.2031 3.2733 33.7891 C 3.2733 34.3516 3.5077 34.9140 3.9764 35.3594 L 17.7577 48.8828 C 18.1561 49.2813 18.7655 49.5156 19.2811 49.5156 Z"></path></g>
            </svg>
            Return
          </button>
        </div>
      </main>
    </>
  );
}

export default ProfilePage;

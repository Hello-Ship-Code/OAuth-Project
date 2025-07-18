import { useNavigate } from 'react-router-dom';

export const ErrorPage = () => {
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center" style={{ color: '#120020' }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width="150"
        height="150"
        className="mb-4"
      >
        <circle cx="50" cy="50" r="48" stroke="black" strokeWidth="2" fill="#4B0082" />
        <rect x="25" y="20" width="50" height="60" fill="#61536B" />
        <line x1="15" y1="80" x2="85" y2="80" stroke="#9785A5" strokeWidth="2" />
        <text x="50%" y="50%" textAnchor="middle" fill="#fff" fontSize="12">
          ⚠️
        </text>
      </svg>
      <h1 className="text-3xl font-bold text-[#4B0082]">404 - Page Not Found</h1>
      <p className="mt-2 text-lg text-[#61536B]">This is not the right page!</p>
      <button
        onClick={redirectToHome}
        className="mt-4 px-6 py-2 bg-[#4B0082] text-white rounded-md hover:bg-[#C5AFD6]"
      >
        Go to Home
      </button>
    </div>
  );
};
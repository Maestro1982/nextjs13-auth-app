const SingleProfilePage = ({ params }: { params: { id: string } }) => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1 className='text-2xl'>Profile</h1>
      <p>Welcome to your profile page!</p>
      <span className='p-2 ml-2 rounded bg-sky-500 text-white'>
        id: {params.id}
      </span>
    </div>
  );
};
export default SingleProfilePage;

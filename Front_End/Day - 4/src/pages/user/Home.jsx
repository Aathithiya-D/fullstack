import pic1 from '../../assets/images/pic1.jpg'

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen ">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-semibold mb-6 mt-20">Welcome to Starry Ni8's Event Management Platform</h1>
          <img src={pic1} alt='pic1 image'></img>
      </div>
    </div>
  );
}

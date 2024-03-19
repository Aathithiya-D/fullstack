export default function Faq() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-semibold mb-6">Frequently Asked Questions</h1>
        <div className="space-y-4 mb-16">
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold">How do I register for an account?</h2>
            <p>To register for an account, click on the "Register" button and fill in the required information.</p>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold">How do I log in to my account?</h2>
            <p>Simply enter your credentials (username/email and password) on the login page and click "Login."</p>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold">How can I view all available events?</h2>
            <p>You can view all available events by navigating to the "Events" section of the platform.</p>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold">How do I view all available venues?</h2>
            <p>Visit the "Venues" section to see a list of all available venues for booking.</p>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold">How can I book an event?</h2>
            <p>To book an event, check the venue availability, select the desired date, and proceed with the payment.</p>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold">How do I cancel a booked event?</h2>
            <p>You can cancel a booked event through your account settings, which will automatically reflect the venue availability for the date.</p>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold">How can I check the status of my booking?</h2>
            <p>The status of your booking can be viewed in the "My Bookings" section of your account dashboard.</p>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold">How do I delete a booking?</h2>
            <p>To delete a booking, navigate to the "My Bookings" section and follow the prompts to delete the selected booking.</p>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold">How can I log out of my account?</h2>
            <p>Click on the "Logout" button located in the account menu to log out of your account.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

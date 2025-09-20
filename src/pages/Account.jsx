import React from "react";

export default function Account() {
  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Account Settings</h2>

      <form className="space-y-8 text-gray-700">
        {/* Profile Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Profile Information</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Username</label>
              <input
                type="text"
                defaultValue="simoncarter21"
                className="w-full mt-1 px-3 py-2 border rounded-md focus:ring focus:ring-blue-200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                defaultValue="simon.carter@example.com"
                className="w-full mt-1 px-3 py-2 border rounded-md focus:ring focus:ring-blue-200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Profile Picture</label>
              <input
                type="file"
                className="w-full mt-1 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 
                file:rounded-md file:border-0 file:text-sm file:font-semibold 
                file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </div>
          </div>
        </div>

        {/* Security Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Security</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                defaultValue="********"
                className="w-full mt-1 px-3 py-2 border rounded-md focus:ring focus:ring-blue-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Two-Factor Authentication</label>
              <select className="w-full mt-1 px-3 py-2 border rounded-md focus:ring focus:ring-blue-200">
                <option>Disabled</option>
                <option>Email Verification</option>
                <option>Authenticator App</option>
              </select>
            </div>
          </div>
        </div>

        {/* Preferences Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Preferences</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Notifications</label>
              <select className="w-full mt-1 px-3 py-2 border rounded-md focus:ring focus:ring-blue-200">
                <option>Email Only</option>
                <option>SMS Only</option>
                <option>Email + SMS</option>
                <option>None</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Theme</label>
              <select className="w-full mt-1 px-3 py-2 border rounded-md focus:ring focus:ring-blue-200">
                <option>Light</option>
                <option>Dark</option>
                <option>System Default</option>
              </select>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}

import { useEffect, useState } from "react";
import api from "../../api/api";
import AdminNavbar from "../../Components/Admin/AdminNavbar";

function AdminMessages() {
  const [messages, setMessages] =
    useState([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages =
    async () => {
      try {
        const response =
          await api.get(
            "/contact"
          );

        setMessages(
          response.data
        );
      } catch (error) {
        console.error(error);
      }
    };

  return (
    <>
  <AdminNavbar />

  <div className="max-w-7xl mx-auto p-8"></div>
    <div className="max-w-7xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-8">
        Customer Messages
      </h1>

      <div className="space-y-6">

        {messages.map(
          (message) => (
            <div
              key={message._id}
              className="
                bg-white
                p-6
                rounded-xl
                shadow
              "
            >

              <h2 className="font-bold text-xl">
                {message.name}
              </h2>

              <p className="text-gray-600">
                {message.email}
              </p>

              <p className="mt-3">
                <strong>
                  Subject:
                </strong>{" "}
                {message.subject}
              </p>

              <p className="mt-3">
                {message.message}
              </p>

            </div>
          )
        )}

      </div>

    </div>
    </>
  );
}

export default AdminMessages;
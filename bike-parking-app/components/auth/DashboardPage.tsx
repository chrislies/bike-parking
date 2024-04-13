"use client";
"use client";
import React, { useEffect, useState } from 'react';
import { supabaseClient } from '@/config/supabaseClient';
import './Dashboard.page.css';

interface PendingRequest {
  id: number;
  email: string;
  x_coord: number;
  y_coord: number;
  request_type: string;
  created_at: string;
  description: string;
  image: string;
}

const DashboardPage: React.FC = () => {
  const [pendingRequests, setPendingRequests] = useState<PendingRequest[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [actionModalOpen, setActionModalOpen] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState<PendingRequest | null>(null);

  useEffect(() => {
    const fetchPendingRequests = async () => {
      const { data, error } = await supabaseClient.from('Pending').select('*');
      if (error) {
        console.error('Error fetching pending requests:', error);
      } else {
        setPendingRequests(data);
      }
    };
    fetchPendingRequests();
  }, []);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const handleActionModal = (request: PendingRequest) => {
    setSelectedRequest(request);
    setActionModalOpen(true);
  };

  const closeActionModal = () => {
    setActionModalOpen(false);
    setSelectedRequest(null);
  };

  const handleAddToTable = async (tableName: 'BlackList' | 'UserAdded') => {
    if (!selectedRequest) {
      alert('No request selected');
      return;
    }
  
    let payload: { location_id?: number; email?: string; x_coord?: number; y_coord?: number; } = {};
  
    switch (tableName) {
      case 'BlackList':
        payload = { location_id: selectedRequest.x_coord }; // Assuming `location_id` is derived from `x_coord`
        break;
      case 'UserAdded':
        payload = {
          email: selectedRequest.email,
          x_coord: selectedRequest.x_coord,
          y_coord: selectedRequest.y_coord,
        };
        break;
      default:
        alert('Invalid table name');
        return;
    }
  
    try {
      const { error } = await supabaseClient.from(tableName).insert([payload]);
      if (error) {
        console.error(`Error adding to ${tableName}:`, error.message);
        alert(`Error: ${error.message}`);
      } else {
        alert(`${tableName} updated successfully!`);
        closeActionModal();
      }
    } catch (error) {
      console.error(`Error:`, error.message);
      alert(`Exception: ${error.message}`);
    }
  };

  const handleRejectButtonClick = async (requestId: number) => {
    try {
      const { error } = await supabaseClient.from('Pending').delete().eq('id', requestId);
      if (error) {
        console.error('Error rejecting request:', error.message);
      } else {
        setPendingRequests(prevRequests => prevRequests.filter(request => request.id !== requestId));
        console.log('Request rejected successfully!');
      }
    } catch (error) {
      console.error('Error rejecting request:', error.message);
    }
  };

  return (
    <div className="dashboardContainer">
      <h1 className="dashboardTitle">Pending Requests Dashboard</h1>
      <table className="table">
        <thead>
          <tr>
            <th className="th imageCell">Image</th>
            <th className="th">ID</th>
            <th className="th">Email</th>
            <th className="th">X Coord</th>
            <th className="th">Y Coord</th>
            <th className="th">Request Type</th>
            <th className="th">Created At</th>
            <th className="th">Description</th>
            <th className="th">Actions</th>
          </tr>
        </thead>
        <tbody>
          {pendingRequests.map((request) => (
            <tr key={request.id}>
              <td className="td imageCell" onClick={() => handleImageClick(request.image)}>
                <img src={request.image} alt="Request" className="image" />
              </td>
              <td className="td">{request.id}</td>
              <td className="td">{request.email}</td>
              <td className="td">{request.x_coord}</td>
              <td className="td">{request.y_coord}</td>
              <td className="td">{request.request_type}</td>
              <td className="td">{request.created_at || 'null'}</td>
              <td className="td">{request.description}</td>
              <td className="td">
                <button className="button greenButton" onClick={() => handleActionModal(request)}>✔</button>
                <button className="button redButton" onClick={() => handleRejectButtonClick(request.id)}>✘</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="overlay" onClick={closeModal}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <img src={selectedImage || ''} alt="Enlarged request" className="enlargedImage" />
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}

      {actionModalOpen && (
        <div className="overlay" onClick={closeActionModal}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <h2>Choose Action</h2>
            <button onClick={() => handleAddToTable('BlackList')}>Add to BlackList</button>
            <button onClick={() => handleAddToTable('UserAdded')}>Add to UserAdded</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;

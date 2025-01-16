import React, { useMemo } from "react";
import { Card } from "../../../components/ui/card";
import { Camera } from "lucide-react";

const MembershipCard = ({
  memberData = {
    firstName: "John",
    lastName: "Doe",
    gender: "male",
    membershipPlan: "basic",
    membershipType: "annual",
    memberNumber: "2024-0001",
    joinDate: "2024-01-16",
    validUntil: "2025-01-16",
  },
}) => {
  const getPlanColor = (plan) => {
    const colors = {
      basic: "bg-gray-600",
      standard: "bg-blue-600",
      premium: "bg-purple-600",
    };
    return colors[plan] || colors.basic;
  };

  const calculateValidUntil = (joinDate, plan) => {
    const date = new Date(joinDate);
    switch (plan.toLowerCase()) {
      case "monthly":
        date.setMonth(date.getMonth() + 1);
        break;
      case "quarterly":
        date.setMonth(date.getMonth() + 3);
        break;
      case "annual":
        date.setFullYear(date.getFullYear() + 1);
        break;
      default:
        date.setMonth(date.getMonth() + 1);
    }
    return date.toISOString().split("T")[0];
  };

  const getPlaceholderImage = (gender = "other") => {
    const placeholders = {
      male: "https://www.flaticon.com/free-icons/man",
      female: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      other: "https://www.flaticon.com/free-icons/suit",
    };
    return placeholders[gender.toLowerCase()] || placeholders.other;
  };

  const validUntil = useMemo(
    () => calculateValidUntil(memberData.joinDate, memberData.membershipType),
    [memberData.joinDate, memberData.membershipType]
  );

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <Card className="w-96 h-56 relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-xl">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 transform rotate-45">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute h-32 w-32 border border-white/20"
              style={{
                left: `${i * 100}px`,
                top: `${i * 40}px`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Card Content */}
      <div className="relative h-full p-6 flex flex-col justify-between">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold">The Body Refinery</h1>
            <p className="text-sm text-gray-300">MEMBERSHIP CARD</p>
          </div>
          <div
            className={`${getPlanColor(
              memberData.membershipPlan
            )} px-3 py-1 rounded-full text-xs font-semibold uppercase`}
          >
            {memberData.membershipPlan}
          </div>
        </div>

        {/* Member Info */}
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
          {/* <Camera className="w-8 h-8 text-gray-400" /> */}
            <img
              src={getPlaceholderImage(memberData.gender)}
              alt="Placeholder"
              className="w-16 h-16 bg-gray-700 rounded-full"
            />
            {/* {memberData.gender ? (
              <img
              src={getPlaceholderImage(memberData.gender)}
              alt="Placeholder"
              className="w-16 h-16 bg-gray-700 rounded-full"
            />
            ) :  <Camera className="w-8 h-8 text-gray-400" />} */}
          </div>
          <div>
            <h2 className="text-xl font-bold">
              {memberData.firstName} {memberData.lastName}
            </h2>
            <p className="text-sm text-gray-300">
              Member #{memberData.memberNumber}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between text-sm">
          <div>
            <p className="text-gray-400">JOINED</p>
            <p className="font-semibold">{formatDate(memberData.joinDate)}</p>
          </div>
          <div>
            <p className="text-gray-400">VALID UNTIL</p>
            <p className="font-semibold">{formatDate(validUntil)}</p>
            {/* <p className="font-semibold">{formatDate(memberData.validUntil)}</p> */}
          </div>
          <div>
            <p className="text-gray-400">TYPE</p>
            <p className="font-semibold capitalize">
              {memberData.membershipType}
            </p>
          </div>
        </div>

        {/* Holographic Effect */}
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-xl" />
      </div>
    </Card>
  );
};

export default MembershipCard;

import * as React from "react"

import { Button } from "../../../components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card"
import { Input } from "../../../components/ui/input"
import { Label } from "../../../components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select"

 function GymRegistrationForm() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Framework</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  )
}

export default GymRegistrationForm

// import React, { useState, useEffect } from "react";
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardContent,
// } from "../../../@/components/ui/card";
// import { Input } from "../../../@/components/ui/input";
// import { Label } from "../../../@/components/ui/label";
// import { Button } from "../../../@/components/ui/button";
// import { Checkbox } from "../../../@/components/ui/checkbox";
// import {
//   RadioGroup,
//   RadioGroupItem,
// } from "../../../@/components/ui/radio-group";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "../../../@/components/ui/select";
// import { Alert, AlertDescription } from "../../../@/components/ui/alert";
// import { Separator } from "../../../@/components/ui/separator";

// const GymRegistrationForm = () => {
//   const membershipPlans = {
//     basic: {
//       name: "Basic",
//       description: "Access to gym facilities and basic equipment",
//       monthlyMultiplier: 1,
//     },
//     standard: {
//       name: "Standard",
//       description: "Basic + Group classes and wellness workshops",
//       monthlyMultiplier: 1.5,
//     },
//     premium: {
//       name: "Premium",
//       description:
//         "Standard + Personal training sessions and premium amenities",
//       monthlyMultiplier: 2,
//     },
//   };

//   const servicesPricing = {
//     personalTraining: { name: "Personal Training", price: 49 },
//     groupClasses: { name: "Group Classes", price: 29 },
//     spa: { name: "Spa Services", price: 69 },
//     nutrition: { name: "Nutrition Counseling", price: 39 },
//     skinCare: { name: "Skin Care Services", price: 59 },
//     wellness: { name: "Wellness Coaching", price: 45 },
//   };

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     birthdate: "",
//     gender: "",
//     address: {
//       street: "",
//       city: "",
//       state: "",
//       zipCode: "",
//     },
//     membershipType: "",
//     membershipPlan: "",
//     services: [],
//     emergencyContact: {
//       name: "",
//       phone: "",
//       relation: "",
//     },
//     isFitForExercise: false,
//   });

//   const [errors, setErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);
//   const [totalPrice, setTotalPrice] = useState(0);

//   const calculateTotalPrice = () => {
//     if (!formData.membershipType || !formData.membershipPlan) return 0;

//     // Base prices
//     const basePrices = {
//       monthly: 59,
//       quarterly: 159 / 3, // Per month
//       annual: 549 / 12, // Per month
//     };

//     // Calculate base membership price
//     let basePrice = basePrices[formData.membershipType];

//     // Apply plan multiplier
//     basePrice *= membershipPlans[formData.membershipPlan].monthlyMultiplier;

//     // Add selected services
//     const servicesTotal = formData.services.reduce((total, service) => {
//       return total + (servicesPricing[service]?.price || 0);
//     }, 0);

//     // Calculate total based on membership type
//     let total = basePrice + servicesTotal;
//     if (formData.membershipType === "quarterly") {
//       total *= 3;
//     } else if (formData.membershipType === "annual") {
//       total *= 12;
//     }

//     return total;
//   };

//   useEffect(() => {
//     setTotalPrice(calculateTotalPrice());
//   }, [formData.membershipType, formData.membershipPlan, formData.services]);

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.firstName.trim())
//       newErrors.firstName = "First name is required";
//     if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Invalid email format";
//     }
//     if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
//     if (!formData.birthdate) newErrors.birthdate = "Birth date is required";
//     if (!formData.gender) newErrors.gender = "Gender is required";
//     if (!formData.address.street.trim())
//       newErrors.street = "Street address is required";
//     if (!formData.address.city.trim()) newErrors.city = "City is required";
//     if (!formData.address.state.trim()) newErrors.state = "State is required";
//     if (!formData.address.zipCode.trim())
//       newErrors.zipCode = "ZIP code is required";
//     if (!formData.membershipType)
//       newErrors.membershipType = "Please select a membership type";
//     if (!formData.membershipPlan)
//       newErrors.membershipPlan = "Please select a membership plan";
//     if (!formData.isFitForExercise)
//       newErrors.isFitForExercise = "You must confirm your fitness readiness";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const generatePDF = (data) => {
//     const doc = new jsPDF();
//     doc.setFontSize(16);
//     doc.text("Wellness Center Registration", 10, 10);
//     doc.setFontSize(12);
//     doc.text(`Full Name: ${data.name}`, 10, 20);
//     doc.text(`Date of Birth: ${data.dob}`, 10, 30);
//     doc.text(`Gender: ${data.gender}`, 10, 40);
//     doc.text(`Contact: ${data.contact}`, 10, 50);
//     doc.text(`Email: ${data.email}`, 10, 60);
//     doc.text(`Selected Services: ${data.service.join(", ")}`, 10, 70);
//     doc.text(`Membership Plan: ${data.membershipPlan}`, 10, 80);
//     doc.text(
//       `Fitness Confirmation: ${data.fitnessConfirmation ? "Yes" : "No"}`,
//       10,
//       90
//     );

//     return doc;
//   };

//   const handleSubmit = async ({ e, data }) => {
//     e.preventDefault();
//     try {
//       if (validateForm()) {
//         setSubmitted(true);
//         console.log("Form submitted:", formData);
//       }
//       const pdf = generatePDF(data);
//       const pdfBlob = pdf.output("blob");
//       const emailServiceParams = {
//         from_name: data.name,
//         email: data.email,
//         message: "Registration Form Attached",
//         pdf_attachment: pdfBlob,
//       };

//       await emailjs.send(
//         "YOUR_SERVICE_ID",
//         "YOUR_TEMPLATE_ID",
//         emailServiceParams,
//         "YOUR_PUBLIC_KEY"
//       );
//     } catch (error) {
//       console.error("Error sending the form", error);
//       alert("Failed to send the form. Please try again.");
//     }
//   };

//   const handleServiceChange = (service) => {
//     setFormData((prev) => ({
//       ...prev,
//       services: prev.services.includes(service)
//         ? prev.services.filter((s) => s !== service)
//         : [...prev.services, service],
//     }));
//   };

//   if (submitted) {
//     return (
//       <Card className="w-full max-w-2xl mx-auto">
//         <CardContent className="pt-6">
//           <Alert>
//             <AlertDescription>
//               Thank you for registering! We'll contact you shortly to confirm
//               your membership. Your total membership cost: $
//               {totalPrice.toFixed(2)}{" "}
//               {formData.membershipType === "monthly"
//                 ? "/month"
//                 : formData.membershipType === "quarterly"
//                 ? "/quarter"
//                 : "/year"}
//             </AlertDescription>
//           </Alert>
//         </CardContent>
//       </Card>
//     );
//   }

//   return (
//     <Card className="w-full max-w-2xl mx-auto">
//       <CardHeader>
//         <CardTitle className="text-2xl font-bold text-center">
//         The Body Refinery Gym Membership Registration
//         </CardTitle>
//       </CardHeader>
//       <CardContent>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Personal Information */}
//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold">Personal Information</h3>
//             <div className="grid grid-cols-2 gap-4">
//               <div className="space-y-2">
//                 <Label htmlFor="firstName">First Name</Label>
//                 <Input
//                   id="firstName"
//                   value={formData.firstName}
//                   onChange={(e) =>
//                     setFormData({ ...formData, firstName: e.target.value })
//                   }
//                   className={errors.firstName ? "border-red-500" : ""}
//                 />
//                 {errors.firstName && (
//                   <p className="text-red-500 text-sm">{errors.firstName}</p>
//                 )}
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="lastName">Last Name</Label>
//                 <Input
//                   id="lastName"
//                   value={formData.lastName}
//                   onChange={(e) =>
//                     setFormData({ ...formData, lastName: e.target.value })
//                   }
//                   className={errors.lastName ? "border-red-500" : ""}
//                 />
//                 {errors.lastName && (
//                   <p className="text-red-500 text-sm">{errors.lastName}</p>
//                 )}
//               </div>
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="gender">Gender</Label>
//               <Select
//                 value={formData.gender}
//                 onValueChange={(value) =>
//                   setFormData({ ...formData, gender: value })
//                 }
//               >
//                 <SelectTrigger
//                   className={errors.gender ? "border-red-500" : ""}
//                 >
//                   <SelectValue placeholder="Select gender" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="male">Male</SelectItem>
//                   <SelectItem value="female">Female</SelectItem>
//                   <SelectItem value="other">Other</SelectItem>
//                   <SelectItem value="prefer-not-to-say">
//                     Prefer not to say
//                   </SelectItem>
//                 </SelectContent>
//               </Select>
//               {errors.gender && (
//                 <p className="text-red-500 text-sm">{errors.gender}</p>
//               )}
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="birthdate">Birth Date</Label>
//               <Input
//                 id="birthdate"
//                 type="date"
//                 value={formData.birthdate}
//                 onChange={(e) =>
//                   setFormData({ ...formData, birthdate: e.target.value })
//                 }
//                 className={errors.birthdate ? "border-red-500" : ""}
//               />
//               {errors.birthdate && (
//                 <p className="text-red-500 text-sm">{errors.birthdate}</p>
//               )}
//             </div>
//           </div>

//           {/* Contact Information */}
//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold">Contact Information</h3>
//             <div className="space-y-2">
//               <Label htmlFor="email">Email</Label>
//               <Input
//                 id="email"
//                 type="email"
//                 value={formData.email}
//                 onChange={(e) =>
//                   setFormData({ ...formData, email: e.target.value })
//                 }
//                 className={errors.email ? "border-red-500" : ""}
//               />
//               {errors.email && (
//                 <p className="text-red-500 text-sm">{errors.email}</p>
//               )}
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="phone">Phone Number</Label>
//               <Input
//                 id="phone"
//                 type="tel"
//                 value={formData.phone}
//                 onChange={(e) =>
//                   setFormData({ ...formData, phone: e.target.value })
//                 }
//                 className={errors.phone ? "border-red-500" : ""}
//               />
//               {errors.phone && (
//                 <p className="text-red-500 text-sm">{errors.phone}</p>
//               )}
//             </div>
//           </div>

//           {/* Address */}
//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold">Address</h3>
//             <div className="space-y-2">
//               <Label htmlFor="street">Street Address</Label>
//               <Input
//                 id="street"
//                 value={formData.address.street}
//                 onChange={(e) =>
//                   setFormData({
//                     ...formData,
//                     address: { ...formData.address, street: e.target.value },
//                   })
//                 }
//                 className={errors.street ? "border-red-500" : ""}
//               />
//               {errors.street && (
//                 <p className="text-red-500 text-sm">{errors.street}</p>
//               )}
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               <div className="space-y-2">
//                 <Label htmlFor="city">City</Label>
//                 <Input
//                   id="city"
//                   value={formData.address.city}
//                   onChange={(e) =>
//                     setFormData({
//                       ...formData,
//                       address: { ...formData.address, city: e.target.value },
//                     })
//                   }
//                   className={errors.city ? "border-red-500" : ""}
//                 />
//                 {errors.city && (
//                   <p className="text-red-500 text-sm">{errors.city}</p>
//                 )}
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="state">State</Label>
//                 <Input
//                   id="state"
//                   value={formData.address.state}
//                   onChange={(e) =>
//                     setFormData({
//                       ...formData,
//                       address: { ...formData.address, state: e.target.value },
//                     })
//                   }
//                   className={errors.state ? "border-red-500" : ""}
//                 />
//                 {errors.state && (
//                   <p className="text-red-500 text-sm">{errors.state}</p>
//                 )}
//               </div>
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="zipCode">ZIP Code</Label>
//               <Input
//                 id="zipCode"
//                 value={formData.address.zipCode}
//                 onChange={(e) =>
//                   setFormData({
//                     ...formData,
//                     address: { ...formData.address, zipCode: e.target.value },
//                   })
//                 }
//                 className={errors.zipCode ? "border-red-500" : ""}
//               />
//               {errors.zipCode && (
//                 <p className="text-red-500 text-sm">{errors.zipCode}</p>
//               )}
//             </div>
//           </div>

//           {/* Membership Plan */}
//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold">Membership Plan</h3>
//             <RadioGroup
//               onValueChange={(value) =>
//                 setFormData({ ...formData, membershipPlan: value })
//               }
//               value={formData.membershipPlan}
//               className="space-y-2"
//             >
//               {Object.entries(membershipPlans).map(([key, plan]) => (
//                 <div
//                   key={key}
//                   className="flex items-center space-x-2 p-4 border rounded-lg"
//                 >
//                   <RadioGroupItem value={key} id={key} />
//                   <Label htmlFor={key} className="flex flex-col">
//                     <span className="font-semibold">{plan.name}</span>
//                     <span className="text-sm text-gray-500">
//                       {plan.description}
//                     </span>
//                   </Label>
//                 </div>
//               ))}
//             </RadioGroup>
//             {errors.membershipPlan && (
//               <p className="text-red-500 text-sm">{errors.membershipPlan}</p>
//             )}
//           </div>

//           {/* Membership Duration */}
//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold">Membership Duration</h3>
//             <RadioGroup
//               onValueChange={(value) =>
//                 setFormData({ ...formData, membershipType: value })
//               }
//               value={formData.membershipType}
//               className="space-y-2"
//             >
//               <div className="flex items-center space-x-2">
//                 <RadioGroupItem value="monthly" id="monthly" />
//                 <Label htmlFor="monthly">Monthly ($59/month)</Label>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <RadioGroupItem value="quarterly" id="quarterly" />
//                 <Label htmlFor="quarterly">Quarterly ($159/3 months)</Label>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <RadioGroupItem value="annual" id="annual" />
//                 <Label htmlFor="annual">Annual ($549/year)</Label>
//               </div>
//             </RadioGroup>
//             {errors.membershipType && (
//               <p className="text-red-500 text-sm">{errors.membershipType}</p>
//             )}
//           </div>

//           {/* Additional Services */}
//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold">Additional Services</h3>
//             <div className="grid grid-cols-2 gap-4">
//               {Object.entries(servicesPricing).map(([key, service]) => (
//                 <div
//                   key={key}
//                   className="flex items-center space-x-2 p-4 border rounded-lg"
//                 >
//                   <Checkbox
//                     id={key}
//                     checked={formData.services.includes(key)}
//                     onCheckedChange={() => handleServiceChange(key)}
//                   />
//                   <Label htmlFor={key} className="flex flex-col">
//                     <span className="font-semibold">{service.name}</span>
//                     <span className="text-sm text-gray-500">
//                       ${service.price}/month
//                     </span>
//                   </Label>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Emergency Contact */}
//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold">Emergency Contact</h3>
//             <div className="space-y-4">
//               <div className="space-y-2">
//                 <Label htmlFor="emergencyName">Name</Label>
//                 <Input
//                   id="emergencyName"
//                   value={formData.emergencyContact.name}
//                   onChange={(e) =>
//                     setFormData({
//                       ...formData,
//                       emergencyContact: {
//                         ...formData.emergencyContact,
//                         name: e.target.value,
//                       },
//                     })
//                   }
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="emergencyPhone">Phone</Label>
//                 <Input
//                   id="emergencyPhone"
//                   type="tel"
//                   value={formData.emergencyContact.phone}
//                   onChange={(e) =>
//                     setFormData({
//                       ...formData,
//                       emergencyContact: {
//                         ...formData.emergencyContact,
//                         phone: e.target.value,
//                       },
//                     })
//                   }
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="emergencyRelation">Relation</Label>
//                 <Select
//                   value={formData.emergencyContact.relation}
//                   onValueChange={(value) =>
//                     setFormData({
//                       ...formData,
//                       emergencyContact: {
//                         ...formData.emergencyContact,
//                         relation: value,
//                       },
//                     })
//                   }
//                 >
//                   <SelectTrigger>
//                     <SelectValue placeholder="Select relation" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="spouse">Spouse</SelectItem>
//                     <SelectItem value="parent">Parent</SelectItem>
//                     <SelectItem value="sibling">Sibling</SelectItem>
//                     <SelectItem value="friend">Friend</SelectItem>
//                     <SelectItem value="other">Other</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//             </div>
//           </div>

//           {/* Fitness Confirmation */}
//           <div className="space-y-4">
//             <div className="flex items-center space-x-2">
//               <Checkbox
//                 id="fitnessConfirmation"
//                 checked={formData.isFitForExercise}
//                 onCheckedChange={(checked) =>
//                   setFormData({ ...formData, isFitForExercise: checked })
//                 }
//               />
//               <Label
//                 htmlFor="fitnessConfirmation"
//                 className={errors.isFitForExercise ? "text-red-500" : ""}
//               >
//                 I confirm that I am fit to engage in fitness activities
//               </Label>
//             </div>
//             {errors.isFitForExercise && (
//               <p className="text-red-500 text-sm">{errors.isFitForExercise}</p>
//             )}
//           </div>

//           {/* Total Price Display */}
//           <div className="mt-6 p-4 bg-gray-50 rounded-lg">
//             <h3 className="text-lg font-semibold">Total Price</h3>
//             <p className="text-2xl font-bold">
//               ${totalPrice.toFixed(2)}
//               <span className="text-sm font-normal text-gray-500">
//                 {formData.membershipType === "monthly"
//                   ? "/month"
//                   : formData.membershipType === "quarterly"
//                   ? "/quarter"
//                   : "/year"}
//               </span>
//             </p>
//           </div>

//           <Button type="submit" className="w-full">
//             Submit Registration
//           </Button>
//         </form>
//       </CardContent>
//     </Card>
//   );
// };

// export default GymRegistrationForm;

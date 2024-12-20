import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import jsPDF from "jspdf";
import emailjs from "@emailjs/browser";

const schema = yup.object().shape({
  name: yup.string().required("Full name is required"),
  dob: yup.date().required("Date of birth is required"),
  gender: yup.string().required("Gender is required"),
  contact: yup.string().required("Contact number is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  service: yup.array().min(1, "Select at least one service"),
  membershipPlan: yup.string().required("Select a membership plan"),
  fitnessConfirmation: yup.boolean().oneOf([true], "Fitness declaration is required"),
});

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const generatePDF = (data) => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Wellness Center Registration", 10, 10);
    doc.setFontSize(12);
    doc.text(`Full Name: ${data.name}`, 10, 20);
    doc.text(`Date of Birth: ${data.dob}`, 10, 30);
    doc.text(`Gender: ${data.gender}`, 10, 40);
    doc.text(`Contact: ${data.contact}`, 10, 50);
    doc.text(`Email: ${data.email}`, 10, 60);
    doc.text(`Selected Services: ${data.service.join(", ")}`, 10, 70);
    doc.text(`Membership Plan: ${data.membershipPlan}`, 10, 80);
    doc.text(`Fitness Confirmation: ${data.fitnessConfirmation ? "Yes" : "No"}`, 10, 90);

    return doc;
  };

  const onSubmit = async (data) => {
    try {
      // Generate PDF
      const pdf = generatePDF(data);
      const pdfBlob = pdf.output("blob");

      // Send Email using EmailJS
      const emailServiceParams = {
        from_name: data.name,
        email: data.email,
        message: "Registration Form Attached",
        pdf_attachment: pdfBlob,
      };

      await emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", emailServiceParams, "YOUR_PUBLIC_KEY");

      alert("Registration successful! PDF sent to the gym email.");
    } catch (error) {
      console.error("Error sending the form: ", error);
      alert("Failed to send the form. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Wellness Center Registration</h1>
      <form onSubmit={handleSubmit(
        onSubmit)} style={styles.form}>
        {/* Personal Details */}
        <div style={styles.formGroup}>
          <label>Full Name</label>
          <input {...register("name")} placeholder="Enter your full name" />
          <p style={styles.error}>{errors.name?.message}</p>
        </div>

        <div style={styles.formGroup}>
          <label>Date of Birth</label>
          <input type="date" {...register("dob")} />
          <p style={styles.error}>{errors.dob?.message}</p>
        </div>

        <div style={styles.formGroup}>
          <label>Gender</label>
          <select {...register("gender")}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <p style={styles.error}>{errors.gender?.message}</p>
        </div>

        <div style={styles.formGroup}>
          <label>Contact Number</label>
          <input type="tel" {...register("contact")} placeholder="Enter your contact number" />
          <p style={styles.error}>{errors.contact?.message}</p>
        </div>

        <div style={styles.formGroup}>
          <label>Email Address</label>
          <input type="email" {...register("email")} placeholder="Enter your email" />
          <p style={styles.error}>{errors.email?.message}</p>
        </div>

        {/* Service Preferences */}
        <div style={styles.formGroup}>
          <label>Services Interested In</label>
          <div>
            <label>
              <input type="checkbox" value="Gym" {...register("service")} /> Gym
            </label>
            <label>
              <input type="checkbox" value="Spa" {...register("service")} /> Spa
            </label>
            <label>
              <input type="checkbox" value="Nutrition" {...register("service")} /> Diet & Nutrition
            </label>
            <label>
              <input type="checkbox" value="Skin Treatment" {...register("service")} /> Skin Treatment
            </label>
          </div>
          <p style={styles.error}>{errors.service?.message}</p>
        </div>

        {/* Membership Plans */}
        <div style={styles.formGroup}>
          <label>Membership Plan</label>
          <select {...register("membershipPlan")}>
            <option value="">Select Plan</option>
            <option value="Basic - $50">Basic - $50</option>
            <option value="Standard - $100">Standard - $100</option>
            <option value="Premium - $150">Premium - $150</option>
          </select>
          <p style={styles.error}>{errors.membershipPlan?.message}</p>
        </div>

        {/* Fitness Declaration */}
        <div style={styles.formGroup}>
          <label>
            <input type="checkbox" {...register("fitnessConfirmation")} /> I confirm that I am fit to engage in fitness activities.
          </label>
          <p style={styles.error}>{errors.fitnessConfirmation?.message}</p>
        </div>

        {/* Submit */}
        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  formGroup: {
    marginBottom: "15px",
  },
  error: {
    color: "red",
    fontSize: "12px",
  },
  button: {
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    padding: "10px",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default RegistrationForm;





// import React, { useState } from 'react';
// import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Button } from '@/components/ui/button';
// import { Checkbox } from '@/components/ui/checkbox';
// import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { Alert, AlertDescription } from '@/components/ui/alert';

// const GymRegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     birthdate: '',
//     membershipType: '',
//     services: [],
//     emergencyContact: {
//       name: '',
//       phone: '',
//       relation: ''
//     }
//   });
//   const [errors, setErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);

//   const validateForm = () => {
//     const newErrors = {};
    
//     if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
//     if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Invalid email format';
//     }
//     if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
//     if (!formData.birthdate) newErrors.birthdate = 'Birth date is required';
//     if (!formData.membershipType) newErrors.membershipType = 'Please select a membership type';
//     if (formData.services.length === 0) newErrors.services = 'Please select at least one service';

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       setSubmitted(true);
//       console.log('Form submitted:', formData);
//     }
//   };

//   const handleServiceChange = (service) => {
//     setFormData(prev => ({
//       ...prev,
//       services: prev.services.includes(service)
//         ? prev.services.filter(s => s !== service)
//         : [...prev.services, service]
//     }));
//   };

//   if (submitted) {
//     return (
//       <Card className="w-full max-w-2xl mx-auto">
//         <CardContent className="pt-6">
//           <Alert>
//             <AlertDescription>
//               Thank you for registering! We'll contact you shortly to confirm your membership.
//             </AlertDescription>
//           </Alert>
//         </CardContent>
//       </Card>
//     );
//   }

//   return (
//     <Card className="w-full max-w-2xl mx-auto">
//       <CardHeader>
//         <CardTitle className="text-2xl font-bold text-center">Gym Membership Registration</CardTitle>
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
//                   onChange={(e) => setFormData({...formData, firstName: e.target.value})}
//                   className={errors.firstName ? "border-red-500" : ""}
//                 />
//                 {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="lastName">Last Name</Label>
//                 <Input
//                   id="lastName"
//                   value={formData.lastName}
//                   onChange={(e) => setFormData({...formData, lastName: e.target.value})}
//                   className={errors.lastName ? "border-red-500" : ""}
//                 />
//                 {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
//               </div>
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="email">Email</Label>
//               <Input
//                 id="email"
//                 type="email"
//                 value={formData.email}
//                 onChange={(e) => setFormData({...formData, email: e.target.value})}
//                 className={errors.email ? "border-red-500" : ""}
//               />
//               {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="phone">Phone Number</Label>
//               <Input
//                 id="phone"
//                 type="tel"
//                 value={formData.phone}
//                 onChange={(e) => setFormData({...formData, phone: e.target.value})}
//                 className={errors.phone ? "border-red-500" : ""}
//               />
//               {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="birthdate">Birth Date</Label>
//               <Input
//                 id="birthdate"
//                 type="date"
//                 value={formData.birthdate}
//                 onChange={(e) => setFormData({...formData, birthdate: e.target.value})}
//                 className={errors.birthdate ? "border-red-500" : ""}
//               />
//               {errors.birthdate && <p className="text-red-500 text-sm">{errors.birthdate}</p>}
//             </div>
//           </div>

//           {/* Membership Type */}
//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold">Membership Type</h3>
//             <RadioGroup
//               onValueChange={(value) => setFormData({...formData, membershipType: value})}
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
//             {errors.membershipType && <p className="text-red-500 text-sm">{errors.membershipType}</p>}
//           </div>

//           {/* Services */}
//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold">Select Services</h3>
//             <div className="grid grid-cols-2 gap-4">
//               <div className="space-y-2">
//                 <div className="flex items-center space-x-2">
//                   <Checkbox 
//                     id="gym"
//                     checked={formData.services.includes('gym')}
//                     onCheckedChange={() => handleServiceChange('gym')}
//                   />
//                   <Label htmlFor="gym">Gym Access</Label>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <Checkbox 
//                     id="personalTraining"
//                     checked={formData.services.includes('personalTraining')}
//                     onCheckedChange={() => handleServiceChange('personalTraining')}
//                   />
//                   <Label htmlFor="personalTraining">Personal Training</Label>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <Checkbox 
//                     id="groupClasses"
//                     checked={formData.services.includes('groupClasses')}
//                     onCheckedChange={() => handleServiceChange('groupClasses')}
//                   />
//                   <Label htmlFor="groupClasses">Group Classes</Label>
//                 </div>
//               </div>
//               <div className="space-y-2">
//                 <div className="flex items-center space-x-2">
//                   <Checkbox 
//                     id="spa"
//                     checked={formData.services.includes('spa')}
//                     onCheckedChange={() => handleServiceChange('spa')}
//                   />
//                   <Label htmlFor="spa">Spa Services</Label>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <Checkbox 
//                     id="nutrition"
//                     checked={formData.services.includes('nutrition')}
//                     onCheckedChange={() => handleServiceChange('nutrition')}
//                   />
//                   <Label htmlFor="nutrition">Nutrition Counseling</Label>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <Checkbox 
//                     id="skinCare"
//                     checked={formData.services.includes('skinCare')}
//                     onCheckedChange={() => handleServiceChange('skinCare')}
//                   />
//                   <Label htmlFor="skinCare">Skin Care Services</Label>
//                 </div>
//               </div>
//             </div>
//             {errors.services && <p className="text-red-500 text-sm">{errors.services}</p>}
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
//                   onChange={(e) => setFormData({
//                     ...formData,
//                     emergencyContact: {...formData.emergencyContact, name: e.target.value}
//                   })}
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="emergencyPhone">Phone</Label>
//                 <Input
//                   id="emergencyPhone"
//                   type="tel"
//                   value={formData.emergencyContact.phone}
//                   onChange={(e) => setFormData({
//                     ...formData,
//                     emergencyContact: {...formData.emergencyContact, phone: e.target.value}
//                   })}
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="emergencyRelation">Relation</Label>
//                 <Select
//                   value={formData.emergencyContact.relation}
//                   onValueChange={(value) => setFormData({
//                     ...formData,
//                     emergencyContact: {...formData.emergencyContact, relation: value}
//                   })}
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

//           <Button type="submit" className="w-full">
//             Submit Registration
//           </Button>
//         </form>
//       </CardContent>
//     </Card>
//   );
// };

// export default GymRegistrationForm;


// import React from "react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

// const schema = yup.object().shape({
//   name: yup.string().required("Full name is required"),
//   dob: yup.date().required("Date of birth is required"),
//   gender: yup.string().required("Gender is required"),
//   contact: yup.string().required("Contact number is required"),
//   email: yup.string().email("Invalid email").required("Email is required"),
//   service: yup.array().min(1, "Select at least one service"),
//   healthDeclaration: yup.boolean().oneOf([true], "Health declaration is required"),
// });

// const RegistrationForm = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const onSubmit = (data) => {
//     console.log("Form Data Submitted: ", data);
//     alert("Registration successful!");
//   };

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.header}>Wellness Center Registration</h1>
//       <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
//         {/* Personal Details */}
//         <div style={styles.formGroup}>
//           <label>Full Name</label>
//           <input {...register("name")} placeholder="Enter your full name" />
//           <p style={styles.error}>{errors.name?.message}</p>
//         </div>

//         <div style={styles.formGroup}>
//           <label>Date of Birth</label>
//           <input type="date" {...register("dob")} />
//           <p style={styles.error}>{errors.dob?.message}</p>
//         </div>

//         <div style={styles.formGroup}>
//           <label>Gender</label>
//           <select {...register("gender")}>
//             <option value="">Select Gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//             <option value="other">Other</option>
//           </select>
//           <p style={styles.error}>{errors.gender?.message}</p>
//         </div>

//         <div style={styles.formGroup}>
//           <label>Contact Number</label>
//           <input type="tel" {...register("contact")} placeholder="Enter your contact number" />
//           <p style={styles.error}>{errors.contact?.message}</p>
//         </div>

//         <div style={styles.formGroup}>
//           <label>Email Address</label>
//           <input type="email" {...register("email")} placeholder="Enter your email" />
//           <p style={styles.error}>{errors.email?.message}</p>
//         </div>

//         {/* Service Preferences */}
//         <div style={styles.formGroup}>
//           <label>Services Interested In</label>
//           <div>
//             <label>
//               <input type="checkbox" value="Gym" {...register("service")} /> Gym
//             </label>
//             <label>
//               <input type="checkbox" value="Spa" {...register("service")} /> Spa
//             </label>
//             <label>
//               <input type="checkbox" value="Nutrition" {...register("service")} /> Diet & Nutrition
//             </label>
//             <label>
//               <input type="checkbox" value="Skin Treatment" {...register("service")} /> Skin Treatment
//             </label>
//           </div>
//           <p style={styles.error}>{errors.service?.message}</p>
//         </div>

//         {/* Health Declaration */}
//         <div style={styles.formGroup}>
//           <label>
//             <input type="checkbox" {...register("healthDeclaration")} /> I confirm that I am in good health and fit for fitness activities.
//           </label>
//           <p style={styles.error}>{errors.healthDeclaration?.message}</p>
//         </div>

//         {/* Submit */}
//         <button type="submit" style={styles.button}>Submit</button>
//       </form>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     maxWidth: "500px",
//     margin: "auto",
//     padding: "20px",
//     backgroundColor: "#f9f9f9",
//     borderRadius: "8px",
//     boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
//   },
//   header: {
//     textAlign: "center",
//     marginBottom: "20px",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//   },
//   formGroup: {
//     marginBottom: "15px",
//   },
//   error: {
//     color: "red",
//     fontSize: "12px",
//   },
//   button: {
//     backgroundColor: "#007BFF",
//     color: "#fff",
//     border: "none",
//     padding: "10px",
//     borderRadius: "4px",
//     cursor: "pointer",
//   },
// };

// export default RegistrationForm;

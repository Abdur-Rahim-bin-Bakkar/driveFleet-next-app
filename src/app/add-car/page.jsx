// "use client";


// const AddCarForm = () => {


//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // console.log(formData);
//           const formData = new FormData(e.target);

//   const data = Object.fromEntries(formData.entries());

//   console.log(data);
//     };

//     return (
//         <div className="flex justify-center items-center py-10 px-4 bg-gray-50">
//             <Card className="w-full max-w-2xl p-6 shadow-lg rounded-2xl">
//                 <h2 className="text-2xl font-bold text-center text-[#36ADA3] mb-6">
//                     Add New Car
//                 </h2>

//                 <form onSubmit={handleSubmit} className="space-y-6">

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

//                         <Input
//                             label="Car Name"
//                             name="carName"
//                             placeholder="Toyota Corolla"
//                         />

//                         <Input
//                             label="Daily Rent Price"
//                             name="dailyRentPrice"
//                             type="number"
//                             placeholder="500"
//                         />

//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

//                         <Select label="Car Type" name="carType">
//                             <SelectItem key="SUV">SUV</SelectItem>
//                             <SelectItem key="Sedan">Sedan</SelectItem>
//                             <SelectItem key="Hatchback">Hatchback</SelectItem>
//                             <SelectItem key="Luxury">Luxury</SelectItem>
//                         </Select>

//                         <Select label="Availability Status" name="availabilityStatus">
//                             <SelectItem key="Available">Available</SelectItem>
//                             <SelectItem key="Unavailable">Unavailable</SelectItem>
//                         </Select>

//                     </div>

//                     <Input
//                         label="Image URL"
//                         name="imageURL"
//                         placeholder="https://..."
//                     />

//                     <Input
//                         label="Seat Capacity"
//                         name="seatCapacity"
//                         type="number"
//                     />

//                     <Input
//                         label="Pickup Location"
//                         name="pickupLocation"
//                     />

//                     <Textarea
//                         label="Description"
//                         name="description"
//                         minRows={4}
//                     />

//                     <Button
//                         type="submit"
//                         className="w-full bg-[#36ADA3] text-white font-semibold text-lg py-2 rounded-xl"
//                     >
//                         Add Car
//                     </Button>

//                 </form>
//             </Card>
//         </div>
//     );
// };

// export default AddCarForm;
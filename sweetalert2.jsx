import Swal from "sweetalert2";

Swal.fire({
  title: "Welcome!",
  text: "Thanks for using SweetAlert2.",
  icon: "success",
  confirmButtonText: "OK",
}).then((result) => {
  // Handle button click event
  if (result.isConfirmed) {
    console.log("User clicked OK button");
  }
});

"use server";

function validateEmail(email: string) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

export async function createContactData(
  _prevState: unknown,
  formData: FormData
) {
  const rawFormData = {
    lastname: formData.get("lastname") as string,
    firstname: formData.get("firstname") as string,
    company: formData.get("company") as string,
    email: formData.get("email") as string,
    message: formData.get("message") as string,
  };

  if (!rawFormData.lastname) {
    return {
      status: "error",
      message: "Please enter your last name",
    };
  }
  if (!rawFormData.firstname) {
    return {
      status: "error",
      message: "Please enter your first name",
    };
  }
  if (!rawFormData.company) {
    return {
      status: "error",
      message: "Please enter your company name",
    };
  }
  if (!rawFormData.email) {
    return {
      status: "error",
      message: "Please enter your email",
    };
  }
  if (!validateEmail(rawFormData.email)) {
    return {
      status: "error",
      message: "Email address format is incorrect",
    };
  }
  if (!rawFormData.message) {
    return {
      status: "error",
      message: "Please enter a message",
    };
  }

  // sample form management service

  // const result = await fetch(
  //   `https://api.hsforms.com/submissions/v3/integration/submit/${process.env.HUBSPOT_PORTAL_ID}/${process.env.HUBSPOT_FORM_ID}`,
  //   {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       fields: [
  //         {
  //           objectTypeId: "0-1",
  //           name: "lastname",
  //           value: rawFormData.lastname,
  //         },
  //         {
  //           objectTypeId: "0-1",
  //           name: "firstname",
  //           value: rawFormData.firstname,
  //         },
  //         {
  //           objectTypeId: "0-1",
  //           name: "company",
  //           value: rawFormData.company,
  //         },
  //         {
  //           objectTypeId: "0-1",
  //           name: "email",
  //           value: rawFormData.email,
  //         },
  //         {
  //           objectTypeId: "0-1",
  //           name: "message",
  //           value: rawFormData.message,
  //         },
  //       ],
  //     }),
  //   }
  // );

  // try {
  //   await result.json();
  // } catch (e) {
  //   console.log(e);
  //   return {
  //     status: "error",
  //     message: "The contact sending failed",
  //   };
  // }

  return { status: "success", message: "OK" };
}

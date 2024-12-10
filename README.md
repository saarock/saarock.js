# Saarock.js Library

Saarock.js is a highly advanced JavaScript library designed to enhance your web applications by providing beautiful toast notifications and additional UI components such as a back-to-top button. With its flexible and easy-to-integrate features, Saarock.js helps developers add modern, eye-catching UI elements to their websites or web apps.

This guide outlines how to integrate and use Saarock.js effectively, providing instructions for both pure JavaScript developers and those working with WordPress.

## Important Notice

**For optimal performance, we highly recommend using `async/await` when working with Saarock.js toast notifications.**

By using `async/await`, your application will benefit from non-blocking asynchronous operations, which are essential for smooth and efficient execution, especially in applications that involve real-time updates or complex asynchronous tasks.

## Table of Contents

1. [How to Use Saarock.js](#how-to-use-saarockjs)
2. [Customization Options](#customization-options)
3. [License](#license)

## How to Use Saarock.js

To use the Saarock.js library, follow the instructions below. It's easy to integrate into your project, and you can start displaying toast notifications and adding UI components in just a few steps.

### 1. Include the Library

You can include Saarock.js from a CDN directly in your HTML file:

```html
<script type="module">
  import { saarock } from "https://cdn.jsdelivr.net/gh/saarock/saarock.js@main/dist/index.js";
</script>
2. Basic Example: Display a Toast Notification
Here is an example of how to display a success toast notification with Saarock.js:

html
Copy code
<script type="module">
  import { saarock } from "https://cdn.jsdelivr.net/gh/saarock/saarock.js@main/dist/index.js";

  // Set up a button click event to trigger the toast notification
  document
    .getElementById("notifyButton")
    .addEventListener("click", async () => {
      await saarock.success({
        message: "Welcome to Saarock.js!",
        position: "right",
        comeFrom: "BOTTOM",
        timeOut: 4000, // Optional timeout value in milliseconds
      });
    });
</script>
3. Back to Top Button
Saarock.js also includes a backToTop button that can be configured easily. Here's how to integrate it:

html
Copy code
<script type="module">
  import { saarock } from "https://cdn.jsdelivr.net/gh/saarock/saarock.js@main/dist/index.js";

  // Initialize back-to-top button with custom background color
  saarock.backToTop({
    backColor: "green", // Customize the background color
  });
</script>
4. Customization Options
You can customize various aspects of the toast notifications and back-to-top button, such as the position, animation direction, timeout, and more. Here are some of the available options:

Toast Notification Options:
message (string) - The message to be displayed in the toast.
position (string) - The position of the toast on the screen. Valid values: left, right, middle.
comeFrom (string) - The direction from which the toast will appear. Valid values: LEFT, RIGHT, TOP, BOTTOM.
leaveFrom (string) - The direction from which the toast will leave. Valid values: LEFT, RIGHT, TOP, BOTTOM.
timeOut (number) - The time (in milliseconds) after which the toast disappears. Default is 5000 ms.
Back to Top Button Options:
backColor (string) - The background color of the back-to-top button.
License
This library is licensed under the MIT License. See the LICENSE file for more details.

vbnet
Copy code

### Key Features:
- **Toast Notifications**: Display messages in different positions and with different animations.
- **Back-to-Top Button**: Easily integrate a back-to-top button with customizable styling.
- **Customization**: Modify various options for both toast notifications and the back-to-top button to fit your design needs.

### Advanced Integration
If you’re working in a framework like WordPress, simply enqueue the Saarock.js script in your theme’s `functions.php` file and use it similarly to the examples above. For WordPress developers, you can further customize the library based on your theme’s needs.

By following this guide, you can seamlessly integrate Saarock.js into your web applications and provide users with a polished, user-friendly interface.

---

**Enjoy using Saarock.js in your projects!** Feel free to contribute or report any issues via the [GitHub repository](https://github.com/saarock/notty.js).
Explanation:
How to Use: The README provides clear steps on how to import and use the library. It includes real-world examples for implementing both toast notifications and a back-to-top button.
Customization: It mentions customization options that users can modify based on their needs.
Professional Language: The language is formal and straightforward, making it easy to understand for developers.
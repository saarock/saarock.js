# Saarock.js Library

Saarock.js is an advanced JavaScript library for displaying beautiful toast notifications and additional UI components such as the back-to-top button. This guide provides instructions for both pure JavaScript developers and WordPress developers to integrate and use the library effectively.

## Important Notice

**For optimal performance, we highly recommend using `async/await` when working with the Saarock.js toast.**

Using `async/await` can significantly improve performance by allowing for non-blocking operations, which is crucial for applications that rely on asynchronous tasks.

## Table of Contents

1. [How To Use Libary](#how-to-use-libary)
2. [License](#license)


## How To Use Libary 
```html
<script type="module">
  import { notty } from "https://cdn.jsdelivr.net/gh/saarock/saarock.js@main/dist/index.js";

// For toast 
      notty.success({
        position: "right", // optional
        message: "success message",  // optional but better when manually added
        comeFrom: "BOTTOM", // optional
        timeOut: 5000, // optional
        leaveFrom: "LEFT", // optional
        comeFrom: "RIGHT" // optional
      });


      notty.warning({
        position: "right", // optional
        message: "warning message",  // optional but better when manually added
        comeFrom: "BOTTOM", // optional
        timeOut: 5000, // optional
        leaveFrom: "LEFT", // optional
        comeFrom: "RIGHT" // optional
      });

      notty.error({
        position: "right", // optional
        message: "error message",  // optional but better when manually added
        comeFrom: "BOTTOM", // optional
        timeOut: 5000, // optional
        leaveFrom: "LEFT", // optional
        comeFrom: "RIGHT" // optional
      });

      notty.loading({
        position: "right", // optional
        message: "loading message", // optional but better when manually added
        comeFrom: "BOTTOM", // optional
        timeOut: 5000, // optional
        leaveFrom: "LEFT", // optional
        comeFrom: "RIGHT" // optional
      });

// for backToTop button

saarock.backToTop(
    {
      backColor: "green" // required [Any color based on your web style]
    }
  );

</script>
```

## License

This library is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.

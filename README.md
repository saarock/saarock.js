# Saarock.js Library

Saarock.js is an advanced JavaScript library for displaying beautiful toast notifications and additional UI components such as the back-to-top button. This guide provides instructions for both pure JavaScript developers and WordPress developers to integrate and use the library effectively.

## Important Notice

**For optimal performance, we highly recommend using `async/await` when working with the Saarock.js toast.**

Using `async/await` can significantly improve performance by allowing for non-blocking operations, which is crucial for applications that rely on asynchronous tasks.

## Table of Contents

1. [How To Use Libary for toast](#how-to-use-libary-for-toast)
2. [How To Use Libary for backToTop](#how-to-use-libary-for-backToTopButton)
3. [License](#license)


## How To Use Libary For Toast
```html
   <!-- required in the head -->
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/saarock/saarock.js@main/src/styles/toast.css">
```



```html
<script type="module">
  import { notty } from "https://cdn.jsdelivr.net/gh/saarock/saarock.js@main/dist/index.js";

// For toast 
/**
 * @note: first option is default [ AND THE RECOMMENDATION IS USE ONLY ONE position for better experience on small devices ]
 */
      notty.success({
        position: "right" || "left" || "middle",  // optional
        message: "success message",  // optional but better when manually added
        comeFrom: "LEFT" || "BOTTOM" || "RIGHT" || "TOP", // optional
        timeOut: 5000, // optional
        leaveFrom: "RIGHT" || "LEFT" || "BOTTOM" || "TOP", // optional,
        goTo: "/url_where_you_want_to_redirect", // optional
      });


      notty.warning({
        position: "right" || "left" || "middle", // optional
        message: "warning message",  // optional but better when manually added
        comeFrom: "LEFT" || "BOTTOM" || "RIGHT" || "TOP", // optional
        timeOut: 5000, // optional
        leaveFrom: "RIGHT" || "LEFT" || "BOTTOM" || "TOP", // optional
        goTo: "/url_where_you_want_to_redirect", // optional
      });

      notty.error({
        position: "right" || "left" || "middle", // optional
        message: "error message",  // optional but better when manually added
        comeFrom: "LEFT" || "BOTTOM" || "RIGHT" || "TOP", // optional
        timeOut: 5000, // optional
        leaveFrom: "RIGHT" || "LEFT" || "BOTTOM" || "TOP", // optional
        goTo: "/url_where_you_want_to_redirect", // optional
      });

      notty.loading({
        position:"right" || "left" || "middle", // optional
        message: "loading message", // optional but better when manually added
        comeFrom: "LEFT" || "BOTTOM" || "RIGHT" || "TOP", // optional
        timeOut: 5000, // optional
        leaveFrom: "RIGHT" || "LEFT" || "BOTTOM" || "TOP", // optional
        goTo: "/url_where_you_want_to_redirect", // optional
      });

</script>
```

## How to Use Libary For BackToTopButton
```html 
<script type="module">
  import { notty } from "https://cdn.jsdelivr.net/gh/saarock/saarock.js@main/dist/index.js";

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

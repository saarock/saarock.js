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
  import { notty } from "https://cdn.jsdelivr.net/gh/saarock/notty.js@main/dist/index.js";

  document
    .getElementById("notifyButton")
    .addEventListener("click", async () => {
      await notty.success({
        position: "right",
        message: "welcome",
        comeFrom: "BOTTOM",
      });
    });
</script>
```

## License

This library is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.

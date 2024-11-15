import header from "./Header.js";
import footer from "./Footer.js";

export default {
  template: `
    ${header.template}
      <div class="docs">
        <h1>LaunchPad Documentation 📖</h1>
        <hr>

        <!-- Introduction -->
        <section>
          <h2>Introduction</h2>
          <p>Welcome to <strong>Launch Pad</strong>, your gateway to launching multiple URLs with ease! 🚀 Whether you're managing projects, opening tabs for research, or simply multitasking, LaunchPad saves you time and effort by opening URLs with a single click.</p>
        </section>
        <hr>

        <!-- Usage -->
        <section>
          <h2>Usage</h2>
          <ol>
            <li><strong>GET Method:</strong> Enter a comma-separated list of URLs in the text box and click "Launch" to open them all at once in new tabs.</li>
            <li><strong>POST Method:</strong> Send a POST request to our endpoint with a JSON array of URLs. The app will validate and launch them in your browser.</li>
          </ol>
          <p>Make sure the URLs are valid and well-formed! If a URL doesn’t have a protocol (like <code>https://</code>"), we’ll automatically add it for you.</p>
        </section>
        <hr>

        <!-- Permissions Section -->
        <section>
            <h2>Permissions ❗</h2>
            <p>To ensure LaunchPad works smoothly, some permissions may need to be adjusted:</p>

            <!-- Enable Pop-Ups -->
            <h3>1. Enable Pop-Ups</h3>
            <p>
                To launch multiple URLs with the <strong>Launch</strong> button, your browser needs to allow pop-ups. Most browsers block pop-ups by default for security, but don’t worry, it’s easy to fix!
            </p>
            <p><strong>Here’s what you need to do:</strong></p>
            <ul>
                <li>Click the site information icon (usually on the left) in the address bar.</li>
                <li>Enable pop-ups and redirects for this site.</li>
                <li><strong>For example, in Chrome:</strong></li>
                <img src="../img/permission-pop-up0.png" alt="Enable Pop-ups in Chrome" class="permissions-img">
                <br>
                <li>Alternatively, click the pop-up blocker icon (on the right) in the address bar.</li>
                <li>Enable pop-ups from here.</li>
                <li><strong>Note:</strong> The pop-up notification will only appear when you try to open multiple links using the Launch button.</li>
                <li><strong>Example in Chrome:</strong></li>
                <img src="../img/permission-pop-up1.png" alt="Enable Pop-ups in Chrome" class="permissions-img">
                <br>
            </ul>
            
            <!-- Allow App Protocols -->
            <h3>2. Allow App Protocols</h3>
            <p>
                Some URLs (like <code>vscode://</code> or <code>notion://</code>) open apps directly from the browser. You’ll need to grant permission for your browser to open these external applications.
            </p>
            <p><strong>What to do?</strong></p>
            <ul>
                <li>When prompted by the browser, click "Allow" or "Always Open Links of This Type."</li>
                <li>This step ensures app-specific URLs like <code>vscode://</code> work correctly.</li>
                <li><strong>Example in Chrome:</strong></li>
                <img src="../img/permission-app.png" alt="Allow App Protocols in Chrome" class="permissions-img">
                <br>
            </ul>

            <!-- Persistent Permissions -->
            <h3>3. Persistent Permissions</h3>
            <p>If you use LaunchPad frequently, consider enabling these permissions permanently in your browser for a seamless experience.</p>
            </section>
            <hr>

            <!-- REST Endpoints -->
            <section>
            <h2>REST Endpoints 🔌</h2>
            <h3>POST /launch</h3>
            <p><strong>Description:</strong> Launch multiple URLs in one action.</p>
            <h4>Request Parameters:</h4>
            <pre>
                {
                "post": "true",
                "urls": [
                    "https://example.com",
                    "https://example.org",
                    "https://example.net"
                ]
                }
            </pre>
            <h4>Response:</h4>
            <p>The response will redirect you to the browser, where the URLs will open automatically in new tabs. You can also see a preview of the URLs that will be opened.</p>
        </section>
        <hr>

        <!-- Error Handling -->
        <section>
          <h2>Error Handling 🚫</h2>
          <p>If something goes wrong, don’t worry! We’ve got your back. Here’s how we handle common issues:</p>
          <ul>
            <li><strong>Invalid URLs:</strong> If a URL is malformed, it will be skipped, and the console will log the error.</li>
            <li><strong>Empty URL List:</strong> If no URLs are provided, you’ll see an error message on the interface.</li>
            <li><strong>Non-Array Input:</strong> For POST requests, the input must be a JSON array. If it isn’t, you’ll get a detailed error message in the console and on the page.</li>
          </ul>
        </section>
        <hr>

        <!-- Examples -->
        <section>
          <h2>Examples 🧮</h2>
          <h3>GET Request Example</h3>
          <p>Enter this in the text box:</p>
          <pre>https://example1.com, https://example2.com, example3.com</pre>
          <p>Click "Launch" to open the three URLs in new tabs.</p>

          <h3>POST Request Example</h3>
          <p>Send this JSON payload to our endpoint:</p>
          <pre>
            {
              "post": "true",
              "urls": ["https://example1.com", "https://example2.com"]
            }
          </pre>
          <p>It will open the specified URLs in new tabs.</p>
        </section>
        <hr>

        <!-- Pro Tips -->
        <section>
          <h2>Pro Tips 💡</h2>
          <ul>
            <li>Bookmark the page for quick access to LaunchPad!</li>
            <li>Use the <code>POST</code> method for automation in your apps or workflows.</li>
            <li>Have a long list of URLs? Use a text file or a note-taking app to prepare your list, then copy-paste it into the GET form.</li>
          </ul>
        </section>
        <hr>

        <!-- Troubleshooting -->
        <section>
          <h2>Troubleshooting 🛠️</h2>
          <p>If you encounter any issues:</p>
          <ol>
            <li>Check your console for detailed error logs.</li>
            <li>Ensure your URLs are correctly formatted and use valid protocols (e.g., <code>https://</code>).</li>
            <li>Refer to the error messages displayed on the page.</li>
            <li>If all else fails, contact support. We’re here to help!</li>
          </ol>
        </section>
        <hr>

        <!-- FAQ -->
        <section>
          <h2>FAQ 🤔</h2>
          <h3>Can I use this on mobile?</h3>
          <p>Yes! While best experienced on a desktop browser, LaunchPad works perfectly on mobile too.</p>

          <h3>Is there a limit to the number of URLs I can launch?</h3>
          <p>Technically, no, but launching too many URLs simultaneously may overwhelm your browser.</p>

          <h3>What protocols are supported?</h3>
          <p>We support all protocols that your browser supports! 🚀 This includes common ones like <code>http://</code>, <code>https://</code>, and <code>appName://</code>. If your browser can open it, so can LaunchPad!</p>
          <p>If you encounter a protocol that doesn't work as expected, it might be a limitation of your browser. Feel free to reach out, and we’ll look into it!</p>

        </section>
      </div>
      <div class="docs docs-bottom">
        <hr>
        <p>[This Space Intentionally Is Left Blank]</p>
        <p>**The bottom of this page is padded so readers can maintain a consistent eyeline.**</p>
      </div>
    ${footer.template}
      `,
};

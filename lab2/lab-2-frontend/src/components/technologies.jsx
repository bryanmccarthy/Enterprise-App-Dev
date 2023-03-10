import './Technologies.css';

function Technologies() {

  return (
    <div className="Technologies">
      <div className="Tech-Item">
        <h2 className="Tech-Title">React</h2>
        <p className="Description">
          ReactJS is a JavaScript library used for developing user interfaces, initially created by Facebook. It is a widely adopted tool for building modern web applications.
          Developers use React to build reusable components, which encapsulate the logic and styling of different parts of the user interface. These components can be combined to create complex applications while minimizing code repetition.
          React is efficient in rendering user interfaces due to its Virtual DOM concept. This approach reduces the number of updates required for the interface, resulting in a faster and more responsive application.  
        </p>
      </div>
      <div className="Tech-Item">
        <h2 className="Tech-Title">Node</h2>
        <p className="Description">
          Node.js is a runtime environment for JavaScript that enables developers to execute JavaScript code on the server-side. It is built on the V8 JavaScript engine and provides a rich set of features and capabilities for building server-side applications.
          One of the most important features of Node.js is its non-blocking I/O model, which allows it to handle large numbers of requests simultaneously without blocking other requests. This makes it an excellent choice for building scalable network applications.
          Node.js also has a vast ecosystem of modules and packages, which can be easily installed and used through the Node Package Manager (npm). This provides developers with a wide range of tools and libraries to extend Node.js functionality.
        </p>
      </div>
      <div className="Tech-Item">
        <h2 className="Tech-Title">Axios</h2>
        <p className="Description">
          Axios is a JavaScript library that provides an easy-to-use interface for making HTTP requests from a web browser or Node.js. It is a popular choice among developers because of its simplicity, flexibility, and support for many platforms.
          With Axios, developers can make HTTP requests to retrieve data from a server or to send data to a server using a variety of HTTP methods such as GET, POST, PUT, DELETE, and more. It also supports automatic transformation of JSON data and can handle responses in different formats such as text, XML, and others.
          Axios also provides features such as cancellation of requests, interception of requests and responses, and automatic handling of errors. This makes it a powerful tool for building robust web applications that can handle a wide range of scenarios.
        </p>
      </div>
    </div>
  )
}

export default Technologies;
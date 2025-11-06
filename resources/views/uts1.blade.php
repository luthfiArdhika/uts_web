<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Frame Layout</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #fff;
    }

    .container-fluid {
      padding: 0;
      margin: 0;
      max-width: 100vw;
      overflow-x: hidden;
    }

    .frame {
      border: 2px solid #fff;
      padding: 15px;
      font-weight: bold;
      height: 100%;
      min-height: 150px;
    }

    /* Warna frame */
    .first-frame {
      background-color: #f77f33;
      color: #000;
      min-height: 100px;
    }

    .second-frame, .third-frame, .fourth-frame, .fifth-frame, .sixth-frame {
      background-color: #fde2db;
      color: #000;
    }

    /* Supaya kolom rapat */
    .row {
      margin: 0;
      padding: 0;
    }

    .col-md-4, .col-md-6 {
      margin: 0;
      padding: 0;
    }

    /* Samakan tinggi */
    .row > [class*='col-'] {
      display: flex;
      align-items: stretch;
    }

    .frame {
      width: 100%;
    }

    h5 {
      font-size: 1rem;
      margin: 0 0 8px 0;
    }

    p {
      font-size: 0.9rem;
      margin: 0 0 5px 0;
    }

    ul {
      margin: 8px 0 0 0;
      padding-left: 20px;
      font-weight: normal;
      font-size: 0.85rem;
    }

    ul li {
      margin-bottom: 3px;
    }

    /* Navigation buttons */
    .nav-buttons {
      display: flex;
      justify-content: center;
      gap: 15px;
      padding: 30px 0;
      background-color: #fff;
    }

    .nav-buttons button {
      padding: 12px 40px;
      font-size: 16px;
      font-weight: bold;
      border: 2px solid #f77f33;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.3s;
    }

    .btn-previous {
      background-color: #fff;
      color: #f77f33;
    }

    .btn-previous:hover {
      background-color: #f77f33;
      color: #fff;
    }

    .btn-next {
      background-color: #f77f33;
      color: #fff;
    }

    .btn-next:hover {
      background-color: #ff8c47;
    }
  </style>
</head>
<body>

<div class="container-fluid text-start">

  <!-- First Frame -->
  <div class="frame first-frame">
    <h5>First Frame: Name and address</h5>
    <ul>
      <li>John Doe</li>
      <li>123 Main Street, Jakarta</li>
      <li>Email: john@example.com</li>
    </ul>
  </div>

  <!-- Second & Third Frame -->
  <div class="row g-0">
    <div class="col-md-6">
      <div class="frame second-frame">
        <p>Second frame</p>
        <p>Bulleted list of qualifications</p>
        <ul>
          <li>Bachelor's Degree in Computer Science</li>
          <li>5+ years experience in Web Development</li>
          <li>Certified Project Manager</li>
        </ul>
      </div>
    </div>
    <div class="col-md-6">
      <div class="frame third-frame">
        <p>Third frame</p>
        <p>Links to favourite sites</p>
        <ul>
          <li><a href="#">GitHub</a></li>
          <li><a href="#">Stack Overflow</a></li>
          <li><a href="#">MDN Web Docs</a></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Fourth, Fifth & Sixth Frame -->
  <div class="row g-0">
    <div class="col-md-4">
      <div class="frame fourth-frame">
        <p>Fourth frame</p>
        <p>Scrolling message</p>
        <ul>
          <li>Welcome to my portfolio</li>
          <li>Check out my latest projects</li>
        </ul>
      </div>
    </div>
    <div class="col-md-4">
      <div class="frame fifth-frame">
        <p>Fifth frame</p>
        <p>Blinking reminders</p>
        <ul>
          <li>Team meeting at 3 PM</li>
          <li>Project deadline Friday</li>
        </ul>
      </div>
    </div>
    <div class="col-md-4">
      <div class="frame sixth-frame">
        <p>Sixth frame</p>
        <p>Image</p>
        <ul>
          <li>Profile photo</li>
          <li>Company logo</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<!-- Navigation Buttons -->
<div class="nav-buttons">
  <button type="button" class="btn-previous" onclick="alert('Ini halaman pertama!')">Previous</button>
  <button type="button" class="btn-next" onclick="window.location.href='/frame-layout'">Next</button>
</div>

<script>
  function goToPrevious() {
    window.location.href = '/uts1';
  }

  function goToNext() {
    window.location.href = '/frame-layout';
  }
</script>

</body>
</html>
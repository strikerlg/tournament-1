<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>EMÜ turniirirakendus</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="">
	<meta name="author" content="KHK">

	<!-- Le styles -->
	<link href="../assets/css/bootstrap.css" rel="stylesheet">
	<style>
		body {
			padding-top: 60px; /* 60px to make the container go all the way to the bottom of the topbar */
		}
	</style>
	<link href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.0/css/bootstrap-combined.min.css" rel="stylesheet">

	<!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
	<!--[if lt IE 9]>
	<script src="../assets/js/html5shiv.js"></script>
	<![endif]-->

	<!-- Fav and touch icons -->
	<link rel="apple-touch-icon-precomposed" sizes="144x144" href="../assets/ico/apple-touch-icon-144-precomposed.png">
	<link rel="apple-touch-icon-precomposed" sizes="114x114" href="../assets/ico/apple-touch-icon-114-precomposed.png">
	<link rel="apple-touch-icon-precomposed" sizes="72x72" href="../assets/ico/apple-touch-icon-72-precomposed.png">
	<link rel="apple-touch-icon-precomposed" href="../assets/ico/apple-touch-icon-57-precomposed.png">
	<link rel="shortcut icon" href="../assets/ico/favicon.png">
</head>

<body>

<div class="navbar navbar-inverse navbar-fixed-top">
	<div class="navbar-inner">
		<div class="container">
			<button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
			<a class="brand" href="#">EMÜ turniirirakendus</a>

			<div class="nav-collapse collapse">
				<ul class="nav">
					<li class="active"><a href="#">Home</a></li>
					<li><a href="#about">About</a></li>
					<li><a href="<?=BASE_URL?>auth/logout">Logout</a></li>
				</ul>
			</div>
			<!--/.nav-collapse -->
		</div>
	</div>
</div>

<div class=" container">

						<h1>EMÜ turniirirakendus</h1>

						<table class="table table-striped table-bordered table-condensed">
							<tr>
								<th>id</th>
								<th>name</th>
							</tr>
							<? foreach ($users as $user): ?>
							<tr>
								<td><?=$user['user_id']?></td>
								<td><?=$user['name']?></td>
							</tr>
							<? endforeach; ?>
						</table>

			</div>
			<!-- /container -->

			<!-- Le javascript
			================================================== -->
			<!-- Placed at the end of the document so the pages load faster -->
			<script src="../assets/js/jquery.js"></script>
			<script src="../assets/js/bootstrap-transition.js"></script>
			<script src="../assets/js/bootstrap-alert.js"></script>
			<script src="../assets/js/bootstrap-modal.js"></script>
			<script src="../assets/js/bootstrap-dropdown.js"></script>
			<script src="../assets/js/bootstrap-scrollspy.js"></script>
			<script src="../assets/js/bootstrap-tab.js"></script>
			<script src="../assets/js/bootstrap-tooltip.js"></script>
			<script src="../assets/js/bootstrap-popover.js"></script>
			<script src="../assets/js/bootstrap-button.js"></script>
			<script src="../assets/js/bootstrap-collapse.js"></script>
			<script src="../assets/js/bootstrap-carousel.js"></script>
			<script src="../assets/js/bootstrap-typeahead.js"></script>

</body>
</html>
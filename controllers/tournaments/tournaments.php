<?php
class tournaments
{
	function index()
	{
		global $_request;
		global $_user;
		$_user->require_auth();
		$tournaments = get_all("SELECT * FROM tournament NATURAL JOIN place");
		require 'views/master.php';

	}

	function view()
	{
		global $_request;
		$id = $_request->params[0];
		$users = get_all("SELECT * FROM user WHERE user_id='$id'");
		require 'users_view_view.php';

	}
}
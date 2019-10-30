@extends('front.master')
@section('title', 'Home Page')
@section('content')

<form action="{{ route('home.refreshPage') }}" method="POST" id="myForm">
	@csrf
	<div class="form-control">
		<input type="number" id="numberField" name="numberField">
		<input type="submit" value="SEND!">
	</div>
</form>

@if($success = Session::get('success'))
<div id="displayCountDown" class="alert alert-success">
	<input type="hidden" value="{{ $success }}" id="countdown">
	<p id="timeLeft">{{ $success }} seconds</p>
</div>
@endif

@endsection
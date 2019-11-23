<?php
$email = $_POST["number"];
$nom = $_POST["nom"];
$prenom = $_POST["prenom"];
?>

<p>Bravo <?php echo $prenom ?> <?php echo $nom ?>, nous avons bien reçu vos données.</p>
<p>Email de confirmation: <?php echo $email ?></p>
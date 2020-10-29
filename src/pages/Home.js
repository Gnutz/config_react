import React from "react";
const firebase = require("firebase");
require("firebase/firestore");

export const Home = () => {
	let data;
	var db = firebase.firestore();

	var docRef = db
		.collection("configuration_templates")
		.doc("HsWNE0tlWb3bKqnb9HZ9");

	docRef
		.get()
		.then(function (doc) {
			if (doc.exists) {
				console.log("Document data:", doc.data());
				data = doc.data();
			} else {
				// doc.data() will be undefined in this case
				console.log("No such document!");
			}
		})
		.catch(function (error) {
			console.log("Error getting document:", error);
		});

	return (
		<div>
			<p>
				<span>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis quos
					iste dolore optio, facere nobis repellat nam aspernatur ad temporibus.
				</span>
				<span>
					Molestiae, officiis! Necessitatibus voluptatem, magni voluptate
					consequuntur quia doloremque harum asperiores, modi incidunt nostrum
					rerum facilis nisi. At, tempore quo.
				</span>
				<span>
					Ad debitis rerum hic obcaecati neque, explicabo ea officia nobis.
					Eveniet impedit voluptatibus est quis ut dolorem in ipsam laudantium.
				</span>
				<span>
					Aspernatur exercitationem aperiam necessitatibus vero doloremque
					totam, possimus similique beatae dignissimos hic quia, sit officiis
					obcaecati assumenda enim vel. Repellat.
				</span>
			</p>
			<p>{data}</p>
		</div>
	);
};

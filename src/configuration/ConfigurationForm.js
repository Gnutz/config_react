import React, { Component } from "react";
import { Form, Container, Button, Row, Col, Card } from "react-bootstrap";
import { connect } from "react-redux";
//building dynamic forms using react hooks

export class ConfigurationForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			template: templates: 
				{
					Id: 1,
					SceneIdentifier: "Green_Market",
					Hooks: [
						{
							Description: "",
							Id: 0,
							Name: "AudioHook",
							Options: [
								{
									Description: "Volume of the sound",
									Data: null,
									Type: "Single",
									Name: "volume",
								},
								{
									Description:
										"Do you want the sound to appear as 3D? Between 0-1 0 is 2D and 1 is 3D",
									Data: null,
									Name: "spartialBlend",
									Type: "Single",
								},
								{
									Data: null,
									Name: "minDistance",
									Type: "Single",
									Description: "Minimum distance to hear the sound",
								},
								{
									Name: "maxDistance",
									Description: "Maximum distance where you can hear the sound",
									Type: "Single",
									Data: null,
								},
								{
									Data: null,
									Name: "loop",
									Description: "Do you want the music to loop?",
									Type: "Boolean",
								},
								{
									Name: "source",
									Desscription: "Select the audio",
									Type: "string",
									Data: null,
									available: ["First", "Second"],
								},
							],
						},
					],
				},
			],
		};,
		};
		this.handleSceneSelect = this.handleSceneSelect.bind(this);

		//create the template options
	}

	handleSceneSelect(event) {
		this.setState(
			{
				[event.target.id]: event.target.value,
			},
			() => {
				console.log(this.state.template);
				console.log(this.template === "Default");
			}
		);

		//set the configuration based on the template
	}

	render() {

		//render either a card telling to select a template or a config option
		const card =
			this.state.template === "Default" ? (
				<Card bg="light" text="dark">
					<Card.Body>
						<Form.Text className="text-muted centeredd">
							No hooks avalibale yet. - Select a simulation to start.
						</Form.Text>
					</Card.Body>
				</Card>
			) : null;
		return (
			<Container>
				<Card>
					<h5>Create new Configuration / Configuration name</h5>
					<Form>
						<Form.Group as={Row} controlId="templateSelect">
							<Form.Label column>Select the base simulation</Form.Label>
							<Col>
								<Form.Control
									as="select"
									id="template"
									onChange={this.handleSceneSelect}
								>
									<option>Default</option>
									<option>TestScene</option>
									<option>Green Market</option>
								</Form.Control>
							</Col>
						</Form.Group>
						{card}
					</Form>
				</Card>
			</Container>

		);
	}



	// const mapStateToProps = (state) => {
	// 	return {
	// 		templates: state,
	// 	};
	// };
}

export default connect()(ConfigurationForm);

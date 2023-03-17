import React from "react";
import Header from "../../components/header/Header";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";
import "./termsConditions.css";
const TermsConditions = () => {
	return (
		<div>
			<Header />
			<div className="termsBody">
				<Nav />
				<div className="termsDashboard">
					<ul>
						<li>
							Acceptance of Terms and Conditions: By downloading and using
							Wallsync, you agree to be bound by these Terms and Conditions, as
							well as any additional guidelines, rules, or terms of service that
							Wallsync may introduce or modify in the future.
						</li>
						<li>
							Description of the Service: Wallsync is a finance application that
							helps users split bills, manage expenses and repayments. The
							service provides tools to help users track expenses, set
							reminders, and split bills with friends or family members.
						</li>
						<li>
							Privacy Policy: Wallsync collects and processes personal
							information from users to provide the service. We take the privacy
							of our users seriously and commit to protecting the personal
							information collected. Please refer to our Privacy Policy to
							understand how we handle user data.
						</li>
						<li>
							User Conduct: Users of Wallsync must use the service in accordance
							with these Terms and Conditions, applicable laws, and regulations.
							Users must not use Wallsync for any illegal or unauthorized
							purpose, or in any way that may cause harm to others.
						</li>
						<li>
							Intellectual Property Rights: Wallsync retains ownership of all
							intellectual property rights related to the service, including but
							not limited to trademarks, copyright, and trade secrets. Users may
							not use Wallsync's trademarks, logos, or other proprietary
							information without prior written consent.
						</li>
						<li>
							Limitation of Liability: Wallsync will not be liable for any
							direct, indirect, incidental, special, or consequential damages
							arising from the use of the service or inability to use the
							service. Wallsync will not be liable for any errors, inaccuracies,
							or omissions in the service.
						</li>
						<li>
							Indemnification: Users agree to indemnify and hold harmless
							Wallsync, its affiliates, officers, agents, and employees from any
							and all claims, damages, or expenses arising from the user's use
							of the service or violation of these Terms and Conditions.
						</li>
						<li>
							Modification of Terms and Conditions: Wallsync may modify these
							Terms and Conditions at any time, and any changes will be
							effective immediately upon posting. Users are encouraged to review
							the Terms and Conditions periodically to stay informed of any
							updates or changes.
						</li>
						<li>
							Governing Law: These Terms and Conditions shall be governed by and
							construed in accordance with the laws of the jurisdiction in which
							Wallsync is located.Any disputes arising out of these Terms and
							Conditions shall be resolved through binding arbitration. The
							arbitration will take place in the jurisdiction in which Wallsync
							is located.
						</li>
						<li>
							Termination: Wallsync may terminate a user's account at any time,
							without notice or cause. Upon termination, the user's access to
							the service will be revoked. The user is responsible for any fees
							or charges incurred prior to termination.
						</li>
						<li>
							Contact Us: If you have any questions or concerns regarding these
							Terms and Conditions, please contact us at wallsyncapp@gmail.com.
							We will reach out to you as soon as possible.Thank you for your
							interest in Wallsync! For any urgent matters, please call our
							customer support hotline at 1-800-WALLSYNC.
						</li>
					</ul>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default TermsConditions;

import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { GiTargetShot } from 'react-icons/gi';



import { Container, Div1, Div2, Div3, LinkItem, Logo, LogoText, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => (
	<Container>
		<Div1>
			<Link href="/">
				<LinkItem>
					<Logo>
						<GiTargetShot size="3rem" />
					</Logo>
					<LogoText>Portfolio </LogoText>
				</LinkItem>
			</Link>
		</Div1>

		<Div2>
			<li>
				<Link href="#about">
					<NavLink>About</NavLink>
				</Link>
			</li>
			<li>
				<Link href="#projects">
					<NavLink>Projects</NavLink>
				</Link>
			</li>
			<li>
				<Link href="#skills">
					<NavLink>Skills</NavLink>
				</Link>
			</li>
			<li>
				<Link href="#skills" >
					<NavLink>Certificates</NavLink>
				</Link>
			</li>
		</Div2>

		<Div3>
			<SocialIcons href="https://github.com/aicprog">
				<AiFillGithub size="3rem" />
			</SocialIcons>

			<SocialIcons href="https://www.linkedin.com/in/acocom/">
				<AiFillLinkedin size="3rem" />
			</SocialIcons>

			<SocialIcons href="https://www.instagram.com/webdvac/">
				<AiFillInstagram size="3rem" />
			</SocialIcons>
		</Div3>
	</Container>
);

export default Header;

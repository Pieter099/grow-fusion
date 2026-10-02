import React from 'react';
import { render, screen } from '@testing-library/react';
import Contacts from '../Components/Contacts';

describe('Contacts component', () => {
  test('renders the Contact Us heading', () => {
    render(<Contacts />);

    expect(
      screen.getByRole('heading', {
        name: 'Contact Us',
      })
    ).toBeInTheDocument();
  });

  test('renders the contact information', () => {
    render(<Contacts />);

    expect(
      screen.getByText(
        /If you have any queries or are experiencing issues with this site/i
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /If you want to hear more from us, you can follow us below/i
      )
    ).toBeInTheDocument();
  });

  test('renders the email link correctly', () => {
    render(<Contacts />);

    const emailLink = screen.getByRole('link', {
      name: 'grow-fusion@gmail.com',
    });

    expect(emailLink).toHaveAttribute(
      'href',
      'mailto:grow-fusion@gmail.com'
    );
  });

  test('renders the Follow us on heading', () => {
    render(<Contacts />);

    expect(
      screen.getByRole('heading', {
        name: 'Follow us on',
      })
    ).toBeInTheDocument();
  });

  test('renders all social media images with accessible alternative text', () => {
    render(<Contacts />);

    expect(screen.getByAltText('YouTube')).toBeInTheDocument();
    expect(screen.getByAltText('X')).toBeInTheDocument();
    expect(screen.getByAltText('Facebook')).toBeInTheDocument();

    expect(screen.getAllByRole('img')).toHaveLength(3);
  });

  test('loads all social media images lazily', () => {
    render(<Contacts />);

    const images = screen.getAllByRole('img');

    images.forEach((image) => {
      expect(image).toHaveAttribute('loading', 'lazy');
    });
  });

  test('renders all social media links', () => {
    render(<Contacts />);

    const links = screen.getAllByRole('link');

    expect(links).toHaveLength(4);

    expect(links[0]).toHaveAttribute(
      'href',
      'mailto:grow-fusion@gmail.com'
    );

    links.slice(1).forEach((link) => {
      expect(link).toHaveAttribute('href', '/');
    });
  });
});
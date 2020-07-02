import React from "react";
import {
  render,
} from "@testing-library/react";
import OverallGrade from '../components/OverallGrade'
import "@testing-library/jest-dom/extend-expect";

test('Should render the right overall' , async () => { 
    const overall = 8.75; 
    const color = '#57A773'
    const container = render(<OverallGrade overall={overall} color={color} />)

    expect(container.getByText(overall.toString(), { exact: false })).toBeInTheDocument()
})
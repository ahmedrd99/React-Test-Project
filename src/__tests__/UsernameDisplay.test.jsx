import { describe,it,test,expect} from "vitest";
import { UsernameDisplay } from "../components/usernameDisplay";
import { render,screen } from "@testing-library/react";
import { element } from "prop-types";
 
describe(' UsernameDisplay', ()=> { 
it('should rendre username ',async ()=> {
    render(< UsernameDisplay username="ahmeddev"  />);
  // expect( result.container) .toMatchSnapshot()

expect (   await screen.findByText("ahmeddev",{},{ timeout:10000})).toBeInTheDocument(); // Recherche + Vérification
// element.array.forEach((element) =>  expect(element).not.toBeInTheDocument());
  //  let error;
// try {
//  screen.getByText("ahmeddev")
//    }catch(err) {
//     error = err;
//    }
//    expect(error).toBeDefined()
});
}); 
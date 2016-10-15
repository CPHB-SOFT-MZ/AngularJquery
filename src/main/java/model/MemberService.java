/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 *
 * @author Mikkel
 */
@Path("/members")
public class MemberService {
    public static DataFactory df = new DataFactory();
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getMembers(){
        return Response.ok(df.getMembersAsJson()).build();
    }
}

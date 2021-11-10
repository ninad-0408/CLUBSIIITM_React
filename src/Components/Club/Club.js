import React from 'react';

const Club = (props) => {
    return (
        <div>
             <header class="masthead bg-primary text-white text-center" id="page-top">
        {/* <% if(message.length> 0) {%> */}
            <div class="container fixed-top">
                {/* <% if(status==200) {%> */}
                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                        {/* <%} else {%> */}
                            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                                {/* <%}%> */}
                                    {/* <%= locals.message%> */}
                                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                            </div>
                    </div>
                    {/* <%}%> */}
                        <div class="container d-flex align-items-center flex-column">
                            {/* <!-- Masthead Avatar Image--> */}

                            {/* <img class="masthead-avatar mb-5" src="/image/<%=club.image%>" alt="not found" /> */}
                            {/* <!-- Masthead Heading--> */}

                            <h1 class="masthead-heading text-uppercase mb-0"
                                style="font-family: 'Kaushan Script', cursive;">
                                {props.name}
                            </h1>
                            {/* <!-- Icon Divider--> */}
                            <div class="divider-custom divider-light">
                                <div class="divider-custom-line"></div>
                                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                <div class="divider-custom-line"></div>
                            </div>
                            {/* <% if(joinbutton) { %> */}
                                {/* <form action="<%=club._id%>/approval" method="POST">
                                    <button type="submit" class="btn btn-success">JOIN</button>
                                </form> */}
                                {/* <% }%> */}
                        </div></div>
    </header>

    {/* <!-- Description Section--> */}
    <section class="page-section portfolio" id="Description">
        <div class="container">
            {/* <!-- Portfolio Section Heading--> */}
            <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0"
                style="font-family: 'Kaushan Script', cursive;">Description</h2>
            {/* <!-- Icon Divider--> */}
            <div class="divider-custom">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                <div class="divider-custom-line"></div>
            </div>
            {/* <!-- Portfolio Grid Items--> */}
            <div class="row">
                {/* <!-- Portfolio Item 1--> */}
                <div class="col-md-12 col-lg-12 mb-5">
                    <div class="portfolio-item mx-auto" style="font-family: 'Ubuntu', sans-serif;">
                        <figure class="text-center">
                            <blockquote class="blockquote">
                                {props.description}
                            </blockquote>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Achievements Section--> */}
    <section class="page-section portfolio" id="achievements">
        <div class="container">
            {/* <!-- Portfolio Section Heading--> */}
            <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0"
                style="font-family: 'Kaushan Script', cursive;">Achievements</h2>
            {/* <!-- Icon Divider--> */}
            <div class="divider-custom">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                <div class="divider-custom-line"></div>
            </div>
            {/* <!-- Portfolio Grid Items--> */}
            <div class="row">
                {/* <!-- Portfolio Item 1--> */}
                <div class="col-md-12 col-lg-12 mb-5">
                    <div class="portfolio-item mx-auto" style="font-family: 'Ubuntu', sans-serif;">
                        <ul class="list-group">
                            {/* <% const acheiv=club.achievements; for (key in acheiv) { %> */}
                                <li class="list-group-item">
                                    {/* <%= acheiv[key]%> */}
                                </li>
                                {/* <% } %> */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Event Section--> */}
    <section class="page-section portfolio" id="events">
        <div class="container">
            {/* <!-- Event Section Heading--> */}
            <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0"
                style="font-family: 'Kaushan Script', cursive;">Events</h2>
            {/* <!-- Icon Divider--> */}
            <div class="divider-custom">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                <div class="divider-custom-line"></div>
            </div>
            {/* <!-- Event Grid Items--> */}
            {/* <div class="row">
                <% const obj=club.eventids; for (key in obj) { %>
                    <div class="col-md-6 col-lg-4 mb-5">
                        <a href="/event/<%=obj[key]._id%>">
                            <div class="portfolio-item mx-auto">
                                <img class="img-fluid" src="/image/<%=obj[key].image%>" alt="not found">
                                <h2 class="text-center mt-2" style="font-family: 'Ubuntu', sans-serif;">
                                    <%=obj[key].name%>
                                </h2>
                            </div>
                        </a>
                    </div>
                    <% } %>
            </div> */}
            {/* <% if(verifypresident) { %>
                <a href="<%=club._id%>/event" class="mt-5 col offset-md-4 col-md-4 btn btn-secondary btn-lg"
                    style="font-family: 'Ubuntu', sans-serif;">Add Event</a>
                <% } %> */}
        </div>
    </section>
    {/* <!-- members Section--> */}
    <section class="page-section portfolio" id="members">
        <div class="container">
            {/* <!-- members Section Heading--> */}
            <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0"
                style="font-family: 'Kaushan Script', cursive;">MEMBERS</h2>
            {/* <!-- Icon Divider--> */}
            <div class="divider-custom">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                <div class="divider-custom-line"></div>
            </div>
            <ul class="list-group">
                {/* <% const member=club.memberids; for (key in member) { %>
                    <li class="list-group-item row">
                        <a href="/student/<%=member[key]._id%>/profile"
                            style="color: darkblue; font-family: 'Ubuntu', sans-serif;" class="col">
                            <%= member[key].name%>
                        </a>
                        <% if(verifypresident) { %>
                            <form action="<%=club._id%>/remove/<%=member[key]._id%>" method="POST">
                            <button class="btn btn-danger">Remove</button>
                        </form>
                            <% } %>
                    </li>
                    <% } %> */}
            </ul>
        </div>
    </section>
    {/* <section class="page-section">
        <% if(approvals.length!==0) { %>
            <div class="container">
                <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0"
                    style="font-family: 'Kaushan Script', cursive;">New Approvals</h2>
                <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div> */}


                {/* <ul class="list-group">
                    <% for(request in approvals){ %>
                        <li class="list-group-item row">
                            <a href="/student/<%= approvals[request].studentid._id %>/profile" class="col-xs-6 col-md-8"
                                style="color: darkblue; font-family: 'Ubuntu', sans-serif;">
                                <%= approvals[request].studentid.name %>
                            </a>
                            <div class="col-xs-6 col-md-4">
                                <a href="/approval/<%= approvals[request]._id %>/approve"
                                    class="btn btn-success btn-sm">Approve</a>
                                <a href="/approval/<%= approvals[request]._id %>/meet"
                                    class="btn btn-warning btn-sm">Schedule
                                    Meet</a>
                                <a href="/approval/<%= approvals[request]._id %>/decline"
                                    class="btn btn-danger btn-sm">Reject</a>
                            </div>
                        </li>
                        <% } %>
                </ul>
            </div>
            <% } %> */}
    {/* </section> */}
        </div>
    )
};

export default Club;

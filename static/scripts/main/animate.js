window.animation = {

    init: function() {
        var timeline = window.timeline;
        var Controller = window.Controller;
        var s = window.s;
        var scenes = window.scenes;
        var vbWidth = window.vbWidth;
        var vbHeight = window.vbHeight;
        var objects = window.objects;
        // visit localhost:port/?dev=1 to work in dev mode
        var prod = !urlParams.dev;

        // $('html').perfectScrollbar();
        var mobileView = false;
        //  || (window.innerHeight<500 && window.innerHeight<window.innerWidth)
        if (window.innerWidth < 500) {
            mobileView = true;
        }

        if (!prod) {
            s.rect(0, 0, vbWidth, vbHeight).attr({
                fill: 'none',
                'stroke': '#fff'
            });
        }

        var config = {
            startOffset: 0,
        };
        var widthCallAct = "" + $(window).width() / 4 + "px";

        var widthActIcon = "" + $(window).width() / 9 + "px";
        $('.action-call').css("width", widthCallAct);

        $('.action-icon').css("width", widthActIcon);
        
        timeline.add('start', 0);
        timeline.add('youngpeople', 13);
        timeline.add('buthow', 20);
        timeline.add('choice', 32);
        timeline.add('leadership', 38);
        timeline.add('solution', 46);
        timeline.add('empower', 51);
        timeline.add('reflect', 57);
        timeline.add('world', 62);
        timeline.add('experience', 66.5);
        timeline.add('students', 85);
        timeline.add('companies', 87);
        timeline.add('contact', 91);
        timeline.add('end', 93);

        if (!mobileView) {
            timeline.add('icon', 4);
            timeline.add('tension', 7);
            timeline.add('group', 15);
            timeline.add('decided', 17);
            timeline.add('webelieve', 23);
            timeline.add('buthowInt', 21);
            timeline.add('passion', 26);
            // timeline.add('being', 37);
            timeline.add('welead', 39);
            timeline.add('weenable', 68);
            timeline.add('striving', 84);

            // has to do with scrolling
            // timeline.call(cancelScroll, [], this, 4);
            // timeline.call(cancelScroll, [], this, 7);
            // timeline.call(cancelScroll, [], this, 13);
            // timeline.call(cancelScroll, [], this, 15);
            // timeline.call(cancelScroll, [], this, 17);
            // timeline.call(cancelScroll, [], this, 20);
            // // timeline.call(cancelScroll, [], this, 21);
            // timeline.call(cancelScroll, [], this, 23);
            // timeline.call(cancelScroll, [], this, 26);
            // // timeline.call(cancelScroll, [], this, 37);
            // timeline.call(cancelScroll, [], this, 38);
            // timeline.call(cancelScroll, [], this, 39);
            // timeline.call(cancelScroll, [], this, 68);
            // timeline.call(cancelScroll, [], this, 84);
            // timeline.call(cancelScroll, [], this, 86);
            timeline.call(tagReached, [], this, 85);
            timeline.call(tagReached, [], this, 92);

            timeline.call(cancelScroll, [], this, 32);
            // timeline.call(cancelScroll, [], this, 86);
            // timeline.call(cancelScroll, [], this, 87);
            // timeline.call(cancelScroll, [], this, 88);

            // timeline.eventCallback("onReverseComplete", tagReached);

            // timeline.addPause(4);
            // timeline.addPause(7);
            // timeline.addPause(13);
            // timeline.addPause(15);
            // timeline.addPause(17);
            // timeline.addPause(20);
            // timeline.addPause(21);
            // timeline.addPause(23);
            // timeline.addPause(26);
            // // timeline.addPause(37);
            // timeline.addPause(38);
            // timeline.addPause(39);
            // timeline.addPause(68);
            // timeline.addPause(84);
            // timeline.addPause(85);
            timeline.addPause(90);

            var eligibleScroll = false;

            function tagReached() {
                // timeline.pause();
                $('html, body').css({
                    "overflow": "auto"
                })
                eligibleScroll = true;

            }

            function cancelScroll() {

                timeline.play();
            }
        }
        var breakappart = scenes.addScene(scenes.breakapart, config);
        timeline.add(breakappart.timeline, 'start');

        config.useScene = breakappart.scene;
        var youngpeople = scenes.addScene(scenes.youngpeople, config); // should be around 14 seconds in
        timeline.add(youngpeople.timeline, 'youngpeople');

        config.useScene = null;
        var buthow = scenes.addScene(scenes.buthow, config); // should be around 21 seconds in
        timeline.add(buthow.timeline, 'buthow');

        config.useScene = buthow.scene;
        var choice = scenes.addScene(scenes.choice, config); // should be around 30 seconds in
        timeline.add(choice.timeline, 'choice');

        config.useScene = choice.scene;
        var leadership = scenes.addScene(scenes.leadership, config); // should be around 40 seconds in
        timeline.add(leadership.timeline, 'leadership');

        config.useScene = leadership.scene;
        var solution = scenes.addScene(scenes.solution, config); // should be around 50 seconds in
        timeline.add(solution.timeline, 'solution');

        config.useScene = null;
        config.params = {
            element: 'solution',
            sideman: solution.scene.sideman,
            startTime: timeline.getLabelTime('solution')
        };
        var slide = scenes.addScene(scenes.slide, config);
        timeline.addCallback(slide.trigger, 'solution');

        config.useScene = solution.scene;
        var empower = scenes.addScene(scenes.empower, config); // should be around 60 seconds in
        timeline.add(empower.timeline, 'empower');

        config.useScene = null;
        config.params = {
            element: 'empower',
            sideman: empower.scene.sideman,
            startTime: timeline.getLabelTime('empower')
        };
        slide = scenes.addScene(scenes.slide, config);
        timeline.addCallback(slide.trigger, 'empower');

        config.useScene = null;
        config.prevScene = empower.scene;
        var reflect = scenes.addScene(scenes.reflect, config); // should be around 70 seconds in
        timeline.add(reflect.timeline, 'reflect');

        config.useScene = null;
        config.params = {
            element: 'reflect',
            sideman: empower.scene.sideman,
            startTime: timeline.getLabelTime('reflect')
        };
        slide = scenes.addScene(scenes.slide, config);
        timeline.addCallback(slide.trigger, 'reflect');

        config.prevScene = reflect.scene;
        var world = scenes.addScene(scenes.world, config); // should be around 80 seconds in
        timeline.add(world.timeline, 'world');

        config.useScene = null;
        config.params = {
            element: 'world',
            sideman: reflect.scene.man.otherform,
            startTime: timeline.getLabelTime('world')
        };
        slide = scenes.addScene(scenes.slide, config);
        timeline.addCallback(slide.trigger, 'world');

        config.prevScene = world.scene;
        var experience = scenes.addScene(scenes.experience, config); // should be around 90 seconds in
        timeline.add(experience.timeline, 'experience');

        config.useScene = experience.scene;
        config.prevScene = null;
        var students = scenes.addScene(scenes.students, config); // should be around 90 seconds in
        timeline.add(students.timeline, 'students');


        // this is a hack to fix some weired offset with the animation
        timeline.progress(1, true);
        timeline.progress(0, true);
        // do not touch


        $(window).on('timeline.pause', function() {
            timeline.pause();
        });
        $(window).on('timeline.play', function() {
            timeline.play();
        });
        $(window).on('timeline.add', function(tl, time) {
            timeline.add(tl, time);
            progressJs("#timeline-ctrl").start();
            progressJs("#timeline-ctrl").set(timeline.progress() * 100);
        });

        if (!mobileView) {
            // for scroll play
            $(document).ready(function() {

                var lastScrollTop = 0;
                var goingDown = false;
                $('html, body').css({
                    "overflow": "hidden"
                });

                $('.action-icon').css("font-size", "38%");
                // $('.action-text').css("font-size", "145%");

                window.addEventListener("scroll", function() {
                    if (eligibleScroll) {
                        eligibleScroll = false;
                        var maxScroll = $(document).height() - $(window).height();
                        var st = window.pageYOffset || document.documentElement.scrollTop;
                        if (st > lastScrollTop) {
                            // downscroll code
                            goingDown = true;
                        } else {
                            // upscroll code
                            goingDown = false;
                        }

                        $('html, body').css({
                            "overflow": "hidden"
                        });

                        if (goingDown) {
                            // timeline.play().timeScale(1);
                            timeline.tweenFromTo(timeline.currentLabel(), timeline.getLabelAfter());

                            $('html, body').animate({
                                scrollTop: lastScrollTop + 10
                            }, 5);


                            lastScrollTop = lastScrollTop + 10;

                        } else {
                            $('html, body').animate({
                                scrollTop: lastScrollTop - 10
                            }, 5);

                            lastScrollTop = lastScrollTop - 10;


                            // timeline.seek(timeline.getLabelBefore(), false);
                            // timeline.reverse(timeline.getLabelBefore()).timeScale(5);
                            timeline.tweenFromTo(timeline.currentLabel(), timeline.getLabelBefore()).timeScale(3);

                        }

                    }
                }, false);

                $(".progressjs-progress").css({
                    "position": "fixed",
                    "top": "95.9%"
                });

                $('#stage').css({
                    "position": "fixed",
                    "top": "0"
                })

                $('#timeline-ctrl').css({
                    "position": "fixed",
                    "top": "96%"
                })


            });
        } else {
            $(document).ready(function() {
                var hprog = window.innerHeight/2;

                // $(".progressjs-progress .progressjs-theme-blue").appendTo('#timeline-ctrl')
                $(".progressjs-progress").css({
                    "position": "absolute",
                    "top": hprog+ "px"
                });
            });
            var cumulativeOffset = function(element) {
                var top = 0,
                    left = 0;
                do {
                    top += element.offsetTop || 0;
                    left += element.offsetLeft || 0;
                    element = element.offsetParent;
                } while (element);

                return {
                    top: top,
                    left: left
                };
            };
            var x = $("#stage").css("height");
           console.log(x);
        }

        if (!prod) {
            timeline.seek(59.7, false);
            timeline.timeScale(1);
            timeline.pause();
            // timeline.play();
            Controller.init(timeline);
        } else {
            // Initialize progress
            var tmctrl = $('<div id="timeline-ctrl"> \
            <button id="timeline-start-btn" class="btn timeline-btn" data-value="start"><span>Start</span></button> \
            <figure id="w-c-0" class="white-circle"></figure> \
            <button class="btn xx-size timeline-btn" data-autoplay=true data-value="youngpeople"><span>Young People</span></button> \
            <figure id="w-c-1" class="white-circle"></figure> \
            <button class="btn timeline-btn" data-autoplay=true data-value="buthow"><span>But How</span></button> \
            <figure id="w-c-2" class="white-circle"></figure> \
            <button class="btn timeline-btn" data-autoplay=true data-value="choice"><span>Choice</span></button> \
            <figure id="w-c-3" class="white-circle"></figure> \
            <button class="btn xx-size timeline-btn" data-autoplay=true data-value="leadership"><span>Leadership</span></button> \
            <figure id="w-c-4" class="white-circle"></figure> \
            <button class="btn timeline-btn" data-value="solution"><span>Solution</span></button> \
            <figure id="w-c-5" class="white-circle"></figure> \
            <button class="btn timeline-btn" data-value="empower"><span>Empower</span></button> \
            <figure id="w-c-6" class="white-circle"></figure> \
            <button class="btn timeline-btn" data-value="reflect"><span>Reflect</span></button> \
            <figure id="w-c-7" class="white-circle"></figure> \
            <button class="btn timeline-btn" data-value="world"><span>world</span></button> \
            <figure id="w-c-8" class="white-circle"></figure> \
            <button class="btn xx-size timeline-btn" data-autoplay=true data-value="experience"><span>Experience</span></button> \
            <figure id="w-c-9" class="white-circle"></figure> \
            <button class="btn timeline-btn" data-value="students"><span>Students</span></button> \
            <figure id="w-c-10" class="white-circle"></figure> \
            <button class="btn xx-size timeline-btn" data-value="companies"><span>Companies</span></button> \
            <figure id="w-c-11" class="white-circle"></figure> \
            <button id="timeline-exp-btn" class="btn timeline-btn" data-value="contact"><span>Contact us</span></button> \
            <figure id="w-c-12" class="white-circle"> \
            </figure></div>') ;
            $('#stage').after(tmctrl);
            var progressTimeline = progressJs("#timeline-ctrl").start();
            progressTimeline.set(3);

            // to update progress
            timeline.eventCallback("onUpdate", function() {

                var offset = 0;
                var subTl = null;
                switch (this.getLabelAfter()) {
                    case "icon":
                    case "tension":
                    case "break":
                    case "youngpeople":
                        offset = 3;
                        subTl = breakappart.timeline;
                        break;
                    case "group":
                    case "decided":
                    case "essential":
                    case "buthow":
                        offset = 11.5;
                        subTl = youngpeople.timeline;
                        break;
                    case "choice":
                    case "webelieve":
                    case "passion":
                    case "buthowInt":
                        offset = 19.5
                        subTl = buthow.timeline;
                        break;
                    case "leadership":
                    case "being":
                        offset = 27.5;
                        subTl = choice.timeline;
                        break;
                    case "solution":
                    case "welead":
                        offset = 35.5;
                        subTl = leadership.timeline;
                        break;
                    case "empower":
                        offset = 43.5;
                        subTl = solution.timeline;
                        break;
                    case "reflect":
                        offset = 51;
                        subTl = empower.timeline;
                        break;
                    case "world":
                        offset = 58.5;
                        subTl = reflect.timeline;
                        break;
                    case "experience":
                        offset = 66.5;
                        subTl = world.timeline;
                        break;
                    case "students":
                    case "weenable":
                    case "striving":
                        offset = 73.5;
                        subTl = experience.timeline;
                        break;
                    case "companies":
                        offset = 80.5;
                        subTl = students.timeline;
                        break;
                    case "contact":
                        offset = 89.5;
                        subTl = students.timeline;
                        break;
                    case "end":
                        offset = 97.5;;
                        subTl = students.timeline;
                        break;
                }

                if (this.getLabelAfter() == null) {
                    progressTimeline.set(100);
                } else {
                    progressTimeline.set(offset + subTl.progress() * 7);
                }

            });

            $(document).ready(function() {
                // progressJs("#timeline-ctrl").increase(50); //increase two percent
                // progressJs("#timeline-ctrl").start().autoIncrease(4, 500);
                window.setTimeout(function() {
                    $(window).scrollTop(0);
                }, 0.1);
                $('#timeline-ctrl').on('click', '.timeline-btn', function() {
                    var toLabel = "";
                    var that = $(this);
                    timeline.seek(that.attr('data-value'));

                    switch (that.attr('data-value')) {
                        case "start":
                            toLabel = 3;
                            break;
                        case "youngpeople":
                            toLabel = 11.5;
                            break;
                        case "buthow":
                            toLabel = 19.5;
                            break;
                        case "choice":
                            toLabel = 27.5;
                            break;
                        case "leadership":
                            toLabel = 35.5;
                            break;
                        case "solution":
                            toLabel = 43.5;
                            break;
                        case "empower":
                            toLabel = 51;
                            break;
                        case "reflect":
                            toLabel = 58.5;
                            break;
                        case "world":
                            toLabel = 66.5;
                            break;
                        case "experience":
                            toLabel = 73.5;
                            break;
                        case "students":
                            timeline.seek(87, false);
                            toLabel = 80.5;
                            break;
                        case "companies":
                            timeline.seek(89, false);
                            toLabel = 89.5;
                            break;
                        case "contact":
                            timeline.seek(91, false);
                            toLabel = 97.5;
                            break;
                    }
                    progressTimeline.set(toLabel);
                    if (Boolean(that.attr('data-autoplay'))) {
                        timeline.play();
                    }
                    progressTimeline.start();

                });

                // document.addEventListener('ps-scroll-down', function() {
                //     console.log("ds")
                // })
                //  document.addEventListener('ps-scroll-up', function() {
                //     console.log("la2a")
                // })



                // var controller = new ScrollMagic.Controller();
                // var scene = new ScrollMagic.Scene({
                //         triggerElement: "#stage",
                //         duration: 2000
                //     })
                //     .setTween(timeline)
                //     .addTo(controller);



            });
        }
    }
};

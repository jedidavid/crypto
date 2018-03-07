$(function() {
    $(document).on("ready", function() {
        $("#sltAlgo").change(function() {
            if ($(this).val() == "AES") {
                console.log("AES");
                $("#encryptBtn").click(function() {
                    if ($('#dataTxt').val() == '') {

                    } else {
                        var data = $("#dataTxt").val();
                        var key = $("#secretTxt").val();
                        var encrypted = CryptoJS.AES.encrypt(data, key);
                        console.log(encrypted);
                        $("#encryptedTxt").text(encrypted);
                    }
                });

                $("#decryptBtn").click(function() {
                    if ($('#dataTxt').val() == '') {} else {
                        var encrypted = $("#dataTxt").val();
                        var key = $("#secretTxt").val();
                        try {
                            var data = CryptoJS.AES.decrypt(encrypted, key);
                            console.log(data);
                            $("#decryptedTxt").text(data.toString(CryptoJS.enc.Utf8));
                        } catch (e) {
                            alert("Error:" + e.message);
                        }
                    }
                });
            } else if ($(this).val() == "TDES") {
                console.log("TDES");
                $("#encryptBtn").click(function() {
                    if ($('#dataTxt').val() == '') {} else {
                        var data = $("#dataTxt").val();
                        var key = $("#secretTxt").val();
                        var encrypted = CryptoJS.TripleDES.encrypt(data, key);
                        console.log(encrypted);
                        $("#encryptedTxt").text(encrypted);
                    }
                });

                $("#decryptBtn").click(function() {
                    if ($('#dataTxt').val() == '') {
                        alert("input cannot be blank");
                    } else {
                        var encrypted = $("#dataTxt").val();
                        var key = $("#secretTxt").val();
                        try {
                            var data = CryptoJS.TripleDES.decrypt(encrypted, key);
                            console.log(data);
                            $("#decryptedTxt").text(data.toString(CryptoJS.enc.Utf8));
                        } catch (e) {
                            alert("Error:" + e.message);
                        }
                    }

                });
            } else if ($(this).val() == "RABBIT") {
                console.log("RABBIT");
                $("#encryptBtn").click(function() {
                    if ($('#dataTxt').val() == '') {
                        alert("input cannot be blank");
                    } else {
                        var data = $("#dataTxt").val();
                        var key = $("#secretTxt").val();
                        var encrypted = CryptoJS.Rabbit.encrypt(data, key);
                        console.log(encrypted);
                        $("#encryptedTxt").text(encrypted);
                    }
                });

                $("#decryptBtn").click(function() {
                    if ($('#dataTxt').val() == '') {
                        alert("input cannot be blank");
                    } else {
                        var encrypted = $("#dataTxt").val();
                        var key = $("#secretTxt").val();
                        try {
                            var data = CryptoJS.Rabbit.decrypt(encrypted, key);
                            console.log(data);
                            $("#decryptedTxt").text(data.toString(CryptoJS.enc.Utf8));
                        } catch (e) {
                            alert("Error:" + e.message);
                        }
                    }

                });

            }
        });
    });
});
